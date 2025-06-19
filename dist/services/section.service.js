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
exports.SectionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const section_schema_1 = require("../schemas/section.schema");
let SectionService = class SectionService {
    sectionModel;
    constructor(sectionModel) {
        this.sectionModel = sectionModel;
    }
    async create(createSectionDto) {
        const createdSection = new this.sectionModel(createSectionDto);
        return createdSection.save();
    }
    async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [sections, total] = await Promise.all([
            this.sectionModel
                .find({ isActive: true })
                .sort({ order: 1, createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .exec(),
            this.sectionModel.countDocuments({ isActive: true }),
        ]);
        return {
            sections,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id) {
        const section = await this.sectionModel.findById(id).exec();
        if (!section) {
            throw new common_1.NotFoundException('Section not found');
        }
        return section;
    }
    async update(id, updateSectionDto) {
        const updatedSection = await this.sectionModel
            .findByIdAndUpdate(id, updateSectionDto, { new: true })
            .exec();
        if (!updatedSection) {
            throw new common_1.NotFoundException('Section not found');
        }
        return updatedSection;
    }
    async remove(id) {
        const result = await this.sectionModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Section not found');
        }
    }
    async toggleStatus(id) {
        const section = await this.sectionModel.findById(id).exec();
        if (!section) {
            throw new common_1.NotFoundException('Section not found');
        }
        section.isActive = !section.isActive;
        return section.save();
    }
};
exports.SectionService = SectionService;
exports.SectionService = SectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(section_schema_1.Section.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SectionService);
//# sourceMappingURL=section.service.js.map