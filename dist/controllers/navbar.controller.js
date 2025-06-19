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
exports.NavbarController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const navbar_service_1 = require("../services/navbar.service");
const create_navbar_dto_1 = require("../dto/create-navbar.dto");
let NavbarController = class NavbarController {
    navbarService;
    constructor(navbarService) {
        this.navbarService = navbarService;
    }
    create(createNavbarDto) {
        return this.navbarService.create(createNavbarDto);
    }
    findActive() {
        return this.navbarService.findActive();
    }
    findAll() {
        return this.navbarService.findAll();
    }
    findOne(id) {
        return this.navbarService.findOne(id);
    }
    updateComplete(id, createNavbarDto) {
        return this.navbarService.update(id, createNavbarDto);
    }
    remove(id) {
        return this.navbarService.remove(id);
    }
};
exports.NavbarController = NavbarController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create navbar configuration' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Navbar created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_navbar_dto_1.CreateNavbarDto]),
    __metadata("design:returntype", void 0)
], NavbarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get active navbar configuration' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Active navbar configuration' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavbarController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all navbar configurations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'All navbar configurations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavbarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get navbar by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Navbar configuration' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Navbar ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavbarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update complete navbar configuration',
        description: 'Update all navbar fields (logo, logoAlt, menuItems, ctaButton, isActive) at once. This is your single endpoint to update everything.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Navbar updated successfully' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Navbar ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_navbar_dto_1.CreateNavbarDto]),
    __metadata("design:returntype", void 0)
], NavbarController.prototype, "updateComplete", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete navbar configuration' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Navbar deleted successfully' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Navbar ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavbarController.prototype, "remove", null);
exports.NavbarController = NavbarController = __decorate([
    (0, swagger_1.ApiTags)('navbar'),
    (0, common_1.Controller)('navbar'),
    __metadata("design:paramtypes", [navbar_service_1.NavbarService])
], NavbarController);
//# sourceMappingURL=navbar.controller.js.map