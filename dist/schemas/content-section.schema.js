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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentSectionSchema = exports.ContentSection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ContentSection = class ContentSection {
    heading;
    headingPosition;
    subheading;
    description;
    contentPosition;
    isSlideCards;
    isGridCards;
    cards;
    backgroundColor;
    isActive;
    order;
};
exports.ContentSection = ContentSection;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ContentSection.prototype, "heading", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['left', 'center', 'right'], default: 'center' }),
    __metadata("design:type", String)
], ContentSection.prototype, "headingPosition", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ContentSection.prototype, "subheading", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ContentSection.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['left', 'center', 'right'], default: 'left' }),
    __metadata("design:type", String)
], ContentSection.prototype, "contentPosition", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ContentSection.prototype, "isSlideCards", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ContentSection.prototype, "isGridCards", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                title: { type: String, required: true },
                description: String,
                image: String,
                imageAlt: String,
                url: String,
                buttonText: String,
                buttonUrl: String,
                tags: [String],
                price: String,
                originalPrice: String,
                rating: { type: Number, min: 0, max: 5 },
                reviewCount: Number,
            },
        ],
    }),
    __metadata("design:type", Array)
], ContentSection.prototype, "cards", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '#ffffff' }),
    __metadata("design:type", String)
], ContentSection.prototype, "backgroundColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ContentSection.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ContentSection.prototype, "order", void 0);
exports.ContentSection = ContentSection = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ContentSection);
exports.ContentSectionSchema = mongoose_1.SchemaFactory.createForClass(ContentSection);
//# sourceMappingURL=content-section.schema.js.map