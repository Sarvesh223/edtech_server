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
exports.CreateFooterDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class FooterLinkDto {
    text;
    url;
    isExternal;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FooterLinkDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FooterLinkDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FooterLinkDto.prototype, "isExternal", void 0);
class LinkGroupDto {
    title;
    links;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LinkGroupDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FooterLinkDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FooterLinkDto),
    __metadata("design:type", Array)
], LinkGroupDto.prototype, "links", void 0);
class SocialLinkDto {
    platform;
    url;
    icon;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialLinkDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialLinkDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialLinkDto.prototype, "icon", void 0);
class ContactInfoDto {
    email;
    phone;
    address;
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContactInfoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContactInfoDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContactInfoDto.prototype, "address", void 0);
class CreateFooterDto {
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
exports.CreateFooterDto = CreateFooterDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFooterDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFooterDto.prototype, "logoAlt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFooterDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [LinkGroupDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => LinkGroupDto),
    __metadata("design:type", Array)
], CreateFooterDto.prototype, "linkGroups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SocialLinkDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SocialLinkDto),
    __metadata("design:type", Array)
], CreateFooterDto.prototype, "socialLinks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ContactInfoDto, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContactInfoDto),
    __metadata("design:type", ContactInfoDto)
], CreateFooterDto.prototype, "contactInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFooterDto.prototype, "copyrightText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '#1a202c' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFooterDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '#ffffff' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFooterDto.prototype, "textColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateFooterDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-footer.dto.js.map