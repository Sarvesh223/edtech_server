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
exports.BannerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const banner_schema_1 = require("../schemas/banner.schema");
let BannerService = class BannerService {
    bannerModel;
    constructor(bannerModel) {
        this.bannerModel = bannerModel;
    }
    async create(createBannerDto) {
        const createdBanner = new this.bannerModel(createBannerDto);
        return createdBanner.save();
    }
    async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [banners, total] = await Promise.all([
            this.bannerModel
                .find({ isActive: true })
                .sort({ order: 1, createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .exec(),
            this.bannerModel.countDocuments({ isActive: true }),
        ]);
        return {
            banners,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id) {
        const banner = await this.bannerModel.findById(id).exec();
        if (!banner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return banner;
    }
    async update(id, updateBannerDto) {
        const updatedBanner = await this.bannerModel
            .findByIdAndUpdate(id, updateBannerDto, {
            new: true,
            runValidators: true
        })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return updatedBanner;
    }
    async replaceUpdate(id, updateBannerDto) {
        const updatedBanner = await this.bannerModel
            .findByIdAndUpdate(id, updateBannerDto, {
            new: true,
            overwrite: true,
            runValidators: true
        })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return updatedBanner;
    }
    async remove(id) {
        const result = await this.bannerModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Banner not found');
        }
    }
    async toggleStatus(id) {
        const banner = await this.bannerModel.findById(id).exec();
        if (!banner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        banner.isActive = !banner.isActive;
        return banner.save();
    }
    async updateStatus(id, isActive) {
        const updatedBanner = await this.bannerModel
            .findByIdAndUpdate(id, { isActive }, { new: true })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return updatedBanner;
    }
    async updateOrder(id, order) {
        const updatedBanner = await this.bannerModel
            .findByIdAndUpdate(id, { order }, { new: true })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return updatedBanner;
    }
    async updateField(id, field, value) {
        const updateObj = { [field]: value };
        const updatedBanner = await this.bannerModel
            .findByIdAndUpdate(id, updateObj, { new: true })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return updatedBanner;
    }
    async bulkUpdate(filter, updateData) {
        const result = await this.bannerModel
            .updateMany(filter, updateData)
            .exec();
        return { modifiedCount: result.modifiedCount };
    }
    async updateBannerImage(id, backgroundImage, backgroundImageAlt) {
        const updateData = { backgroundImage };
        if (backgroundImageAlt) {
            updateData.backgroundImageAlt = backgroundImageAlt;
        }
        const updatedBanner = await this.bannerModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return updatedBanner;
    }
    async updateTextOverlay(id, textOverlay) {
        const updatedBanner = await this.bannerModel
            .findByIdAndUpdate(id, { textOverlay }, { new: true })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return updatedBanner;
    }
    async updateButtons(id, buttons) {
        const updatedBanner = await this.bannerModel
            .findByIdAndUpdate(id, { buttons }, { new: true })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException('Banner not found');
        }
        return updatedBanner;
    }
};
exports.BannerService = BannerService;
exports.BannerService = BannerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(banner_schema_1.Banner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BannerService);
//# sourceMappingURL=banner.service.js.map