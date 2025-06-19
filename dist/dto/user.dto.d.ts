export declare class CreateUserDto {
    name: string;
    email: string;
    phone: string;
    interest: string;
    stream: string;
    message?: string;
    status?: string;
}
export declare class EnquiryFormDto {
    name: string;
    email: string;
    phone: string;
    interest: string;
    stream: string;
    message?: string;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    important?: boolean;
}
export declare class UserQueryDto {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    important?: boolean;
    interest?: string;
    stream?: string;
}
export {};
