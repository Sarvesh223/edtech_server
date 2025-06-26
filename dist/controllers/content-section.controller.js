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
exports.ContentSectionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const content_section_service_1 = require("../services/content-section.service");
const create_content_section_dto_1 = require("../dto/create-content-section.dto");
const update_content_section_dto_1 = require("../dto/update-content-section.dto");
let ContentSectionController = class ContentSectionController {
    contentSectionService;
    constructor(contentSectionService) {
        this.contentSectionService = contentSectionService;
    }
    create(createContentSectionDto) {
        return this.contentSectionService.create(createContentSectionDto);
    }
    findAll(page, limit) {
        return this.contentSectionService.findAll(page, limit);
    }
    findOne(id) {
        return this.contentSectionService.findOne(id);
    }
    async update(id, updateContentSectionDto) {
        try {
            const updatedSection = await this.contentSectionService.update(id, updateContentSectionDto);
            return {
                success: true,
                message: 'Content section updated successfully',
                data: updatedSection,
            };
        }
        catch (error) {
            if (error.name === 'CastError' || error.message.includes('not found')) {
                throw new common_1.HttpException('Content section not found', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException(error.message || 'Failed to update content section', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateContent(id, updateData) {
        try {
            const updatedSection = await this.contentSectionService.updateContent(id, updateData);
            return {
                success: true,
                message: 'Content section content updated successfully',
                data: updatedSection,
            };
        }
        catch (error) {
            if (error.name === 'CastError' || error.message.includes('not found')) {
                throw new common_1.HttpException('Content section not found', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException(error.message || 'Failed to update content section content', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateSettings(id, updateData) {
        try {
            const updatedSection = await this.contentSectionService.updateSettings(id, updateData);
            return {
                success: true,
                message: 'Content section settings updated successfully',
                data: updatedSection,
            };
        }
        catch (error) {
            if (error.name === 'CastError' || error.message.includes('not found')) {
                throw new common_1.HttpException('Content section not found', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException(error.message || 'Failed to update content section settings', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    remove(id) {
        return this.contentSectionService.remove(id);
    }
    toggleStatus(id) {
        return this.contentSectionService.toggleStatus(id);
    }
};
exports.ContentSectionController = ContentSectionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create content section' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Content section created successfully',
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_content_section_dto_1.CreateContentSectionDto]),
    __metadata("design:returntype", void 0)
], ContentSectionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active content sections' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of active content sections' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ContentSectionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get content section by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Content section ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content section details' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content section not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentSectionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update content section' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Content section ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Content section updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content section not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_content_section_dto_1.UpdateContentSectionDto]),
    __metadata("design:returntype", Promise)
], ContentSectionController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/content'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update only content fields (heading, description, cards)',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Content section ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Content section content updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content section not found' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ContentSectionController.prototype, "updateContent", null);
__decorate([
    (0, common_1.Patch)(':id/settings'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update only display settings (positions, colors, flags)',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Content section ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Content section settings updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content section not found' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ContentSectionController.prototype, "updateSettings", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete content section' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Content section ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Content section deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content section not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentSectionController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-status'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle content section active status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Content section ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content section status toggled' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content section not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentSectionController.prototype, "toggleStatus", null);
exports.ContentSectionController = ContentSectionController = __decorate([
    (0, swagger_1.ApiTags)('content-sections'),
    (0, common_1.Controller)('content-sections'),
    __metadata("design:paramtypes", [content_section_service_1.ContentSectionService])
], ContentSectionController);
//# sourceMappingURL=content-section.controller.js.map