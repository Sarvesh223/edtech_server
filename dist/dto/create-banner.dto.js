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
exports.CreateBannerDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class TextOverlayDto {
    heading;
    subheading;
    description;
    position;
    textColor;
    backgroundColor;
    opacity;
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TextOverlayDto.prototype, "heading", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TextOverlayDto.prototype, "subheading", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TextOverlayDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['left', 'center', 'right'] }),
    (0, class_validator_1.IsEnum)(['left', 'center', 'right']),
    __metadata("design:type", String)
], TextOverlayDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '#ffffff' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TextOverlayDto.prototype, "textColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TextOverlayDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0.8 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    __metadata("design:type", Number)
], TextOverlayDto.prototype, "opacity", void 0);
class BannerButtonDto {
    text;
    url;
    variant;
    size;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BannerButtonDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BannerButtonDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['primary', 'secondary', 'outline'] }),
    (0, class_validator_1.IsEnum)(['primary', 'secondary', 'outline']),
    __metadata("design:type", String)
], BannerButtonDto.prototype, "variant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['small', 'medium', 'large'] }),
    (0, class_validator_1.IsEnum)(['small', 'medium', 'large']),
    __metadata("design:type", String)
], BannerButtonDto.prototype, "size", void 0);
class CreateBannerDto {
    backgroundImage;
    backgroundImageAlt;
    textOverlay;
    buttons;
    height;
    isActive;
    order;
}
exports.CreateBannerDto = CreateBannerDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannerDto.prototype, "backgroundImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBannerDto.prototype, "backgroundImageAlt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: TextOverlayDto, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TextOverlayDto),
    __metadata("design:type", TextOverlayDto)
], CreateBannerDto.prototype, "textOverlay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [BannerButtonDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BannerButtonDto),
    __metadata("design:type", Array)
], CreateBannerDto.prototype, "buttons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 500 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(200),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], CreateBannerDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBannerDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBannerDto.prototype, "order", void 0);
//# sourceMappingURL=create-banner.dto.js.map