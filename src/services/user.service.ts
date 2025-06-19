import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import {
  CreateUserDto,
  UpdateUserDto,
  EnquiryFormDto,
  UserQueryDto,
} from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      // Check if user with same phone already exists
      const existingUser = await this.userModel.findOne({
        phone: createUserDto.phone,
      });
      if (existingUser) {
        throw new ConflictException(
          'User with this phone number already exists',
        );
      }

      // Check if user with same email already exists
      const existingEmailUser = await this.userModel.findOne({
        email: createUserDto.email,
      });
      if (existingEmailUser) {
        throw new ConflictException('User with this email already exists');
      }

      const user = new this.userModel(createUserDto);
      return await user.save();
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new BadRequestException('Failed to create user');
    }
  }

  async submitEnquiryForm(enquiryFormDto: EnquiryFormDto): Promise<User> {
    try {
      // Check if user with same phone already exists
      const existingUser = await this.userModel.findOne({
        phone: enquiryFormDto.phone,
      });

      if (existingUser) {
        // User exists - mark as important and increment enquiry count
        existingUser.important = true;
        existingUser.enquiryCount += 1;
        existingUser.lastEnquiryDate = new Date();

        // Update other fields with new data
        existingUser.name = enquiryFormDto.name;
        existingUser.email = enquiryFormDto.email;
        existingUser.interest = enquiryFormDto.interest;
        existingUser.stream = enquiryFormDto.stream;
        if (enquiryFormDto.message) {
          existingUser.message = enquiryFormDto.message;
        }

        return await existingUser.save();
      } else {
        // Create new user from enquiry form
        const newUser = new this.userModel({
          ...enquiryFormDto,
          enquiryCount: 1,
          lastEnquiryDate: new Date(),
        });

        return await newUser.save();
      }
    } catch (error) {
      throw new BadRequestException(
        'Failed to submit enquiry form - ' + error.message,
      );
    }
  }

  async findAll(queryDto: UserQueryDto): Promise<{
    users: User[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    const {
      page = 1,
      limit = 10,
      search,
      status,
      important,
      interest,
      stream,
    } = queryDto;

    // Build filter object
    const filter: FilterQuery<UserDocument> = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    if (status) {
      filter.status = status;
    }

    if (important !== undefined) {
      filter.important = important;
    }

    if (interest) {
      filter.interest = { $regex: interest, $options: 'i' };
    }

    if (stream) {
      filter.stream = { $regex: stream, $options: 'i' };
    }

    const total = await this.userModel.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    const users = await this.userModel
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    return {
      users,
      total,
      page,
      totalPages,
    };
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByPhone(phone: string): Promise<User | null> {
    return await this.userModel.findOne({ phone });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(
      id,
      { ...updateUserDto, updatedAt: new Date() },
      { new: true, runValidators: true },
    );

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.userModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('User not found');
    }
    return { message: 'User deleted successfully' };
  }

  async getImportantUsers(): Promise<User[]> {
    return await this.userModel
      .find({ important: true })
      .sort({ lastEnquiryDate: -1 })
      .exec();
  }

  async getUserStats(): Promise<{
    totalUsers: number;
    activeUsers: number;
    importantUsers: number;
    todayEnquiries: number;
  }> {
    const totalUsers = await this.userModel.countDocuments();
    const activeUsers = await this.userModel.countDocuments({
      status: 'active',
    });
    const importantUsers = await this.userModel.countDocuments({
      important: true,
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayEnquiries = await this.userModel.countDocuments({
      createdAt: { $gte: today, $lt: tomorrow },
    });

    return {
      totalUsers,
      activeUsers,
      importantUsers,
      todayEnquiries,
    };
  }
}
