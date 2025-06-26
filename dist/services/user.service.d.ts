import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto, UpdateUserDto, EnquiryFormDto, UserQueryDto } from '../dto/user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    submitEnquiryForm(enquiryFormDto: EnquiryFormDto): Promise<User>;
    findAll(queryDto: UserQueryDto): Promise<{
        users: User[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<User>;
    findByPhone(phone: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getImportantUsers(): Promise<User[]>;
    getUserStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        importantUsers: number;
        todayEnquiries: number;
    }>;
}
