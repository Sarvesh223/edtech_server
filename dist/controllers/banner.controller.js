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
exports.BannerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const banner_service_1 = require("../services/banner.service");
const create_banner_dto_1 = require("../dto/create-banner.dto");
const update_banner_dto_1 = require("../dto/update-banner.dto");
let BannerController = class BannerController {
    bannerService;
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    create(createBannerDto) {
        return this.bannerService.create(createBannerDto);
    }
    findAll(page, limit) {
        return this.bannerService.findAll(page, limit);
    }
    findOne(id) {
        return this.bannerService.findOne(id);
    }
    update(id, updateBannerDto) {
        return this.bannerService.update(id, updateBannerDto);
    }
    replaceUpdate(id, updateBannerDto) {
        return this.bannerService.replaceUpdate(id, updateBannerDto);
    }
    remove(id) {
        return this.bannerService.remove(id);
    }
    toggleStatus(id) {
        return this.bannerService.toggleStatus(id);
    }
    activate(id) {
        return this.bannerService.updateStatus(id, true);
    }
    deactivate(id) {
        return this.bannerService.updateStatus(id, false);
    }
    updateOrder(id, body) {
        return this.bannerService.updateOrder(id, body.order);
    }
};
exports.BannerController = BannerController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create banner' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Banner created successfully' }),
    (0, swagger_1.ApiBody)({ type: create_banner_dto_1.CreateBannerDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_banner_dto_1.CreateBannerDto]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active banners' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of active banners' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get banner by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner details' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Partially update banner' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    (0, swagger_1.ApiBody)({ type: update_banner_dto_1.UpdateBannerDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_banner_dto_1.UpdateBannerDto]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Fully update banner (replace entire banner)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    (0, swagger_1.ApiBody)({ type: create_banner_dto_1.CreateBannerDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_banner_dto_1.CreateBannerDto]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "replaceUpdate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete banner' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-status'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle banner active status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner status toggled' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "toggleStatus", null);
__decorate([
    (0, common_1.Patch)(':id/activate'),
    (0, swagger_1.ApiOperation)({ summary: 'Activate banner' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner activated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "activate", null);
__decorate([
    (0, common_1.Patch)(':id/deactivate'),
    (0, swagger_1.ApiOperation)({ summary: 'Deactivate banner' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner deactivated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "deactivate", null);
__decorate([
    (0, common_1.Patch)(':id/order'),
    (0, swagger_1.ApiOperation)({ summary: 'Update banner order' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner order updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "updateOrder", null);
exports.BannerController = BannerController = __decorate([
    (0, swagger_1.ApiTags)('banner'),
    (0, common_1.Controller)('banner'),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerController);
//# sourceMappingURL=banner.controller.js.map