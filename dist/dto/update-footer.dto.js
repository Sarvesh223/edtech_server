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
exports.UpdateFooterDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class UpdateFooterLinkDto {
    text;
    url;
    isExternal;
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Link text' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterLinkDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Link URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterLinkDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: false,
        description: 'Whether the link is external',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateFooterLinkDto.prototype, "isExternal", void 0);
class UpdateLinkGroupDto {
    title;
    links;
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Group title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLinkGroupDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [UpdateFooterLinkDto],
        required: false,
        description: 'Array of links in the group',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UpdateFooterLinkDto),
    __metadata("design:type", Array)
], UpdateLinkGroupDto.prototype, "links", void 0);
class UpdateSocialLinkDto {
    platform;
    url;
    icon;
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Social media platform name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSocialLinkDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Social media profile URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSocialLinkDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Icon identifier or URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSocialLinkDto.prototype, "icon", void 0);
class UpdateContactInfoDto {
    email;
    phone;
    address;
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Contact email address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateContactInfoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Contact phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateContactInfoDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Physical address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateContactInfoDto.prototype, "address", void 0);
class UpdateFooterDto {
    logo;
    logoAlt;
    description;
    linkGroups;
    socialLinks;
    contactInfo;
    copyrightText;
    backgroundColor;
    textColor;
    isActive;
}
exports.UpdateFooterDto = UpdateFooterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Footer logo URL or path' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Logo alt text for accessibility',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterDto.prototype, "logoAlt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Footer description text' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [UpdateLinkGroupDto],
        required: false,
        description: 'Groups of footer links',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UpdateLinkGroupDto),
    __metadata("design:type", Array)
], UpdateFooterDto.prototype, "linkGroups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [UpdateSocialLinkDto],
        required: false,
        description: 'Social media links',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UpdateSocialLinkDto),
    __metadata("design:type", Array)
], UpdateFooterDto.prototype, "socialLinks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: UpdateContactInfoDto,
        required: false,
        description: 'Contact information',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateContactInfoDto),
    __metadata("design:type", UpdateContactInfoDto)
], UpdateFooterDto.prototype, "contactInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Copyright text' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterDto.prototype, "copyrightText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '#1a202c',
        description: 'Footer background color (hex code)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '#ffffff',
        description: 'Footer text color (hex code)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterDto.prototype, "textColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: true,
        description: 'Whether the footer configuration is active',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateFooterDto.prototype, "isActive", void 0);
//# sourceMappingURL=update-footer.dto.js.map