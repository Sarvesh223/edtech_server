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
exports.CtaButtonDto = exports.MenuItemDto = exports.CreateNavbarDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class MenuItemDto {
    title;
    url;
    isExternal;
    children;
}
exports.MenuItemDto = MenuItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MenuItemDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MenuItemDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MenuItemDto.prototype, "isExternal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [MenuItemDto],
        description: 'Nested menu items for dropdown menus',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MenuItemDto),
    __metadata("design:type", Array)
], MenuItemDto.prototype, "children", void 0);
class CtaButtonDto {
    text;
    url;
    variant;
}
exports.CtaButtonDto = CtaButtonDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CtaButtonDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CtaButtonDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['primary', 'secondary', 'outline'] }),
    (0, class_validator_1.IsEnum)(['primary', 'secondary', 'outline']),
    __metadata("design:type", String)
], CtaButtonDto.prototype, "variant", void 0);
class CreateNavbarDto {
    logo;
    logoAlt;
    menuItems;
    ctaButton;
    isActive;
}
exports.CreateNavbarDto = CreateNavbarDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNavbarDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNavbarDto.prototype, "logoAlt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [MenuItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MenuItemDto),
    __metadata("design:type", Array)
], CreateNavbarDto.prototype, "menuItems", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CtaButtonDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CtaButtonDto),
    __metadata("design:type", CtaButtonDto)
], CreateNavbarDto.prototype, "ctaButton", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateNavbarDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-navbar.dto.js.map