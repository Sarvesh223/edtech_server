"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../services/user.service");
const user_dto_1 = require("../dto/user.dto");
const user_schema_1 = require("../schemas/user.schema");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async create(createUserDto) {
        return await this.userService.createUser(createUserDto);
    }
    async submitEnquiry(enquiryFormDto) {
        const existingUser = await this.userService.findByPhone(enquiryFormDto.phone);
        const user = await this.userService.submitEnquiryForm(enquiryFormDto);
        return {
            message: existingUser
                ? 'Thank you for your continued interest! Your enquiry has been updated.'
                : 'Thank you for your enquiry! We will contact you soon.',
            user,
            isExistingUser: !!existingUser,
        };
    }
    async findAll(queryDto) {
        return await this.userService.findAll(queryDto);
    }
    async getStats() {
        return await this.userService.getUserStats();
    }
    async getImportantUsers() {
        return await this.userService.getImportantUsers();
    }
    async findByPhone(phone) {
        return await this.userService.findByPhone(phone);
    }
    async findByEmail(email) {
        return await this.userService.findByEmail(email);
    }
    async findOne(id) {
        return await this.userService.findOne(id);
    }
    async update(id, updateUserDto) {
        return await this.userService.update(id, updateUserDto);
    }
    async remove(id) {
        return await this.userService.remove(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User created successfully',
        type: user_schema_1.User,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'User already exists' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('enquiry'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Submit enquiry form',
        description: 'Submit enquiry form. If user exists (by phone), marks as important and updates info. If new user, creates account.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Enquiry form submitted successfully',
        type: user_schema_1.User,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.EnquiryFormDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "submitEnquiry", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users with filtering and pagination' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Page number' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Items per page' }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        description: 'Search by name or email',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'status',
        required: false,
        enum: ['active', 'inactive', 'blocked'],
    }),
    (0, swagger_1.ApiQuery)({ name: 'important', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({
        name: 'interest',
        required: false,
        description: 'Filter by interest',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stream',
        required: false,
        description: 'Filter by stream',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Users retrieved successfully' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserQueryDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user statistics' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User statistics retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('important'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all important users (repeat enquiries)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Important users retrieved successfully',
        type: [user_schema_1.User],
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getImportantUsers", null);
__decorate([
    (0, common_1.Get)('phone/:phone'),
    (0, swagger_1.ApiOperation)({ summary: 'Find user by phone number' }),
    (0, swagger_1.ApiParam)({ name: 'phone', description: 'User phone number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found', type: user_schema_1.User }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByPhone", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    (0, swagger_1.ApiOperation)({ summary: 'Find user by email' }),
    (0, swagger_1.ApiParam)({ name: 'email', description: 'User email' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found', type: user_schema_1.User }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found', type: user_schema_1.User }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User updated successfully',
        type: user_schema_1.User,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map