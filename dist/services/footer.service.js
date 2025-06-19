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
exports.FooterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const footer_schema_1 = require("../schemas/footer.schema");
let FooterService = class FooterService {
    footerModel;
    constructor(footerModel) {
        this.footerModel = footerModel;
    }
    async create(createFooterDto) {
        try {
            if (createFooterDto.isActive !== false) {
                await this.footerModel.updateMany({}, { isActive: false });
            }
            const createdFooter = new this.footerModel(createFooterDto);
            return await createdFooter.save();
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to create footer configuration: ${error.message}`);
        }
    }
    async findAll() {
        return await this.footerModel.find().sort({ createdAt: -1 }).exec();
    }
    async findActive() {
        const footer = await this.footerModel.findOne({ isActive: true }).exec();
        if (!footer) {
            throw new common_1.NotFoundException('No active footer found');
        }
        return footer;
    }
    async findOne(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid footer ID format');
        }
        const footer = await this.footerModel.findById(id).exec();
        if (!footer) {
            throw new common_1.NotFoundException(`Footer with ID ${id} not found`);
        }
        return footer;
    }
    async update(id, updateFooterDto) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid footer ID format');
        }
        try {
            if (updateFooterDto.isActive === true) {
                await this.footerModel.updateMany({ _id: { $ne: id } }, { isActive: false });
            }
            const updatedFooter = await this.footerModel
                .findByIdAndUpdate(id, updateFooterDto, {
                new: true,
                runValidators: true
            })
                .exec();
            if (!updatedFooter) {
                throw new common_1.NotFoundException(`Footer with ID ${id} not found`);
            }
            return updatedFooter;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to update footer configuration');
        }
    }
    async remove(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid footer ID format');
        }
        const result = await this.footerModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Footer with ID ${id} not found`);
        }
    }
    async toggleStatus(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid footer ID format');
        }
        const footer = await this.footerModel.findById(id).exec();
        if (!footer) {
            throw new common_1.NotFoundException(`Footer with ID ${id} not found`);
        }
        if (!footer.isActive) {
            await this.footerModel.updateMany({ _id: { $ne: id } }, { isActive: false });
        }
        footer.isActive = !footer.isActive;
        return await footer.save();
    }
};
exports.FooterService = FooterService;
exports.FooterService = FooterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(footer_schema_1.Footer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FooterService);
//# sourceMappingURL=footer.service.js.map