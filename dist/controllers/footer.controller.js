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
exports.FooterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const footer_service_1 = require("../services/footer.service");
const create_footer_dto_1 = require("../dto/create-footer.dto");
const update_footer_dto_1 = require("../dto/update-footer.dto");
let FooterController = class FooterController {
    footerService;
    constructor(footerService) {
        this.footerService = footerService;
    }
    create(createFooterDto) {
        return this.footerService.create(createFooterDto);
    }
    findActive() {
        return this.footerService.findActive();
    }
    findOne(id) {
        return this.footerService.findOne(id);
    }
    update(id, updateFooterDto) {
        return this.footerService.update(id, updateFooterDto);
    }
    remove(id) {
        return this.footerService.remove(id);
    }
    toggleStatus(id) {
        return this.footerService.toggleStatus(id);
    }
    findAll() {
        return this.footerService.findAll();
    }
};
exports.FooterController = FooterController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create footer configuration' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Footer created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_footer_dto_1.CreateFooterDto]),
    __metadata("design:returntype", void 0)
], FooterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get active footer configuration' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Active footer configuration' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No active footer found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FooterController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get footer by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Footer ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Footer configuration' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Footer not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FooterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update footer configuration' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Footer ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Footer updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Footer not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_footer_dto_1.UpdateFooterDto]),
    __metadata("design:returntype", void 0)
], FooterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete footer configuration' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Footer ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Footer deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Footer not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FooterController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-status'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle footer active status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Footer ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Footer status toggled successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Footer not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FooterController.prototype, "toggleStatus", null);
__decorate([
    (0, common_1.Get)('all/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all footer configurations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all footer configurations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FooterController.prototype, "findAll", null);
exports.FooterController = FooterController = __decorate([
    (0, swagger_1.ApiTags)('footer'),
    (0, common_1.Controller)('footer'),
    __metadata("design:paramtypes", [footer_service_1.FooterService])
], FooterController);
//# sourceMappingURL=footer.controller.js.map