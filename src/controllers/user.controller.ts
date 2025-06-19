import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import {
  CreateUserDto,
  UpdateUserDto,
  EnquiryFormDto,
  UserQueryDto,
} from '../dto/user.dto';
import { User } from '../schemas/user.schema';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 409, description: 'User already exists' })
  @ApiBearerAuth()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Post('enquiry')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Submit enquiry form',
    description:
      'Submit enquiry form. If user exists (by phone), marks as important and updates info. If new user, creates account.',
  })
  @ApiResponse({
    status: 200,
    description: 'Enquiry form submitted successfully',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async submitEnquiry(@Body() enquiryFormDto: EnquiryFormDto): Promise<{
    message: string;
    user: User;
    isExistingUser: boolean;
  }> {
    const existingUser = await this.userService.findByPhone(
      enquiryFormDto.phone,
    );
    const user = await this.userService.submitEnquiryForm(enquiryFormDto);

    return {
      message: existingUser
        ? 'Thank you for your continued interest! Your enquiry has been updated.'
        : 'Thank you for your enquiry! We will contact you soon.',
      user,
      isExistingUser: !!existingUser,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all users with filtering and pagination' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search by name or email',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ['active', 'inactive', 'blocked'],
  })
  @ApiQuery({ name: 'important', required: false, type: Boolean })
  @ApiQuery({
    name: 'interest',
    required: false,
    description: 'Filter by interest',
  })
  @ApiQuery({
    name: 'stream',
    required: false,
    description: 'Filter by stream',
  })
  @ApiResponse({ status: 200, description: 'Users retrieved successfully' })
  @ApiBearerAuth()
  async findAll(@Query() queryDto: UserQueryDto): Promise<{
    users: User[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    return await this.userService.findAll(queryDto);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get user statistics' })
  @ApiResponse({
    status: 200,
    description: 'User statistics retrieved successfully',
  })
  @ApiBearerAuth()
  async getStats(): Promise<{
    totalUsers: number;
    activeUsers: number;
    importantUsers: number;
    todayEnquiries: number;
  }> {
    return await this.userService.getUserStats();
  }

  @Get('important')
  @ApiOperation({ summary: 'Get all important users (repeat enquiries)' })
  @ApiResponse({
    status: 200,
    description: 'Important users retrieved successfully',
    type: [User],
  })
  @ApiBearerAuth()
  async getImportantUsers(): Promise<User[]> {
    return await this.userService.getImportantUsers();
  }

  @Get('phone/:phone')
  @ApiOperation({ summary: 'Find user by phone number' })
  @ApiParam({ name: 'phone', description: 'User phone number' })
  @ApiResponse({ status: 200, description: 'User found', type: User })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiBearerAuth()
  async findByPhone(@Param('phone') phone: string): Promise<User | null> {
    return await this.userService.findByPhone(phone);
  }

  @Get('email/:email')
  @ApiOperation({ summary: 'Find user by email' })
  @ApiParam({ name: 'email', description: 'User email' })
  @ApiResponse({ status: 200, description: 'User found', type: User })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiBearerAuth()
  async findByEmail(@Param('email') email: string): Promise<User | null> {
    return await this.userService.findByEmail(email);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User found', type: User })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiBearerAuth()
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiBearerAuth()
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    return await this.userService.remove(id);
  }
}
