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
exports.ContentSectionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const content_section_schema_1 = require("../schemas/content-section.schema");
let ContentSectionService = class ContentSectionService {
    contentSectionModel;
    constructor(contentSectionModel) {
        this.contentSectionModel = contentSectionModel;
    }
    async create(createContentSectionDto) {
        const createdSection = new this.contentSectionModel(createContentSectionDto);
        return createdSection.save();
    }
    async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.contentSectionModel
                .find({ isActive: true })
                .skip(skip)
                .limit(limit)
                .sort({ order: 1, createdAt: -1 })
                .exec(),
            this.contentSectionModel.countDocuments({ isActive: true }).exec(),
        ]);
        return {
            data,
            total,
            page,
            limit,
        };
    }
    async findOne(id) {
        const section = await this.contentSectionModel.findById(id).exec();
        if (!section) {
            throw new common_1.NotFoundException(`Content section with ID ${id} not found`);
        }
        return section;
    }
    async update(id, updateContentSectionDto) {
        const updatedSection = await this.contentSectionModel
            .findByIdAndUpdate(id, updateContentSectionDto, {
            new: true,
            runValidators: true,
        })
            .exec();
        if (!updatedSection) {
            throw new common_1.NotFoundException(`Content section with ID ${id} not found`);
        }
        return updatedSection;
    }
    async updateContent(id, updateData) {
        const updatedSection = await this.contentSectionModel
            .findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
            .exec();
        if (!updatedSection) {
            throw new common_1.NotFoundException(`Content section with ID ${id} not found`);
        }
        return updatedSection;
    }
    async updateSettings(id, updateData) {
        const updatedSection = await this.contentSectionModel
            .findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
            .exec();
        if (!updatedSection) {
            throw new common_1.NotFoundException(`Content section with ID ${id} not found`);
        }
        return updatedSection;
    }
    async remove(id) {
        const result = await this.contentSectionModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Content section with ID ${id} not found`);
        }
        return {
            success: true,
            message: 'Content section deleted successfully',
        };
    }
    async toggleStatus(id) {
        const section = await this.contentSectionModel.findById(id).exec();
        if (!section) {
            throw new common_1.NotFoundException(`Content section with ID ${id} not found`);
        }
        section.isActive = !section.isActive;
        return section.save();
    }
};
exports.ContentSectionService = ContentSectionService;
exports.ContentSectionService = ContentSectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(content_section_schema_1.ContentSection.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContentSectionService);
//# sourceMappingURL=content-section.service.js.map