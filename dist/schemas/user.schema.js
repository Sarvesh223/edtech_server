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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let User = class User {
    name;
    email;
    phone;
    interest;
    stream;
    message;
    status;
    important;
    enquiryCount;
    lastEnquiryDate;
    createdAt;
    updatedAt;
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User name', example: 'John Doe' }),
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email', example: 'john@example.com' }),
    (0, mongoose_1.Prop)({ required: true, lowercase: true, trim: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User phone number', example: '+1234567890' }),
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User interest/course interest',
        example: 'Web Development',
    }),
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], User.prototype, "interest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Educational stream',
        example: 'Computer Science',
    }),
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], User.prototype, "stream", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional message from user', required: false }),
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], User.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User status',
        example: 'active',
        enum: ['active', 'inactive', 'blocked'],
    }),
    (0, mongoose_1.Prop)({ default: 'active', enum: ['active', 'inactive', 'blocked'] }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Important user flag - set to true for repeat enquiries',
        default: false,
    }),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "important", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of times user has submitted enquiry',
        default: 1,
    }),
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "enquiryCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last enquiry date' }),
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], User.prototype, "lastEnquiryDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User creation date' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User last update date' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map