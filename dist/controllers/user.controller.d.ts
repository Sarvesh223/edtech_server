import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto, EnquiryFormDto, UserQueryDto } from '../dto/user.dto';
import { User } from '../schemas/user.schema';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    submitEnquiry(enquiryFormDto: EnquiryFormDto): Promise<{
        message: string;
        user: User;
        isExistingUser: boolean;
    }>;
    findAll(queryDto: UserQueryDto): Promise<{
        users: User[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    getStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        importantUsers: number;
        todayEnquiries: number;
    }>;
    getImportantUsers(): Promise<User[]>;
    findByPhone(phone: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
