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
exports.NavbarService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const navbar_schema_1 = require("../schemas/navbar.schema");
let NavbarService = class NavbarService {
    navbarModel;
    constructor(navbarModel) {
        this.navbarModel = navbarModel;
    }
    async create(createNavbarDto) {
        if (createNavbarDto.isActive !== false) {
            await this.navbarModel.updateMany({}, { isActive: false });
        }
        const createdNavbar = new this.navbarModel(createNavbarDto);
        return createdNavbar.save();
    }
    async findActive() {
        const navbar = await this.navbarModel.findOne({ isActive: true }).exec();
        if (!navbar) {
            throw new common_1.NotFoundException('No active navbar found');
        }
        return navbar;
    }
    async findAll() {
        return this.navbarModel.find().exec();
    }
    async findOne(id) {
        const navbar = await this.navbarModel.findById(id).exec();
        if (!navbar) {
            throw new common_1.NotFoundException('Navbar not found');
        }
        return navbar;
    }
    async update(id, updateNavbarDto) {
        if (updateNavbarDto.isActive === true) {
            await this.navbarModel.updateMany({ _id: { $ne: id } }, { isActive: false });
        }
        const updatedNavbar = await this.navbarModel
            .findByIdAndUpdate(id, updateNavbarDto, { new: true })
            .exec();
        if (!updatedNavbar) {
            throw new common_1.NotFoundException('Navbar not found');
        }
        return updatedNavbar;
    }
    async remove(id) {
        const result = await this.navbarModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Navbar not found');
        }
    }
};
exports.NavbarService = NavbarService;
exports.NavbarService = NavbarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(navbar_schema_1.Navbar.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NavbarService);
//# sourceMappingURL=navbar.service.js.map