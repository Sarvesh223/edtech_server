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
exports.SectionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const section_service_1 = require("../services/section.service");
const create_section_dto_1 = require("../dto/create-section.dto");
const update_section_dto_1 = require("../dto/update-section.dto");
let SectionController = class SectionController {
    sectionService;
    constructor(sectionService) {
        this.sectionService = sectionService;
    }
    create(createSectionDto) {
        return this.sectionService.create(createSectionDto);
    }
    findAll(page, limit) {
        return this.sectionService.findAll(page, limit);
    }
    findOne(id) {
        return this.sectionService.findOne(id);
    }
    update(id, updateSectionDto) {
        return this.sectionService.update(id, updateSectionDto);
    }
    remove(id) {
        return this.sectionService.remove(id);
    }
    toggleStatus(id) {
        return this.sectionService.toggleStatus(id);
    }
};
exports.SectionController = SectionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create section' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Section created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_section_dto_1.CreateSectionDto]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active sections' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of active sections' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get section by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section details' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update section (full update)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Section not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_section_dto_1.UpdateSectionDto]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete section' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-status'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle section active status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section status toggled' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "toggleStatus", null);
exports.SectionController = SectionController = __decorate([
    (0, swagger_1.ApiTags)('sections'),
    (0, common_1.Controller)('sections'),
    __metadata("design:paramtypes", [section_service_1.SectionService])
], SectionController);
//# sourceMappingURL=section.controller.js.map