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
exports.SectionSchema = exports.Section = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Section = class Section {
    title;
    heading;
    headingPosition;
    subheading;
    description;
    leftContent;
    rightContent;
    contentLayout;
    hasCards;
    cards;
    backgroundColor;
    spacing;
    isActive;
    order;
};
exports.Section = Section;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Section.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Section.prototype, "heading", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['left', 'center', 'right'], default: 'center' }),
    __metadata("design:type", String)
], Section.prototype, "headingPosition", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Section.prototype, "subheading", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Section.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Section.prototype, "leftContent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Section.prototype, "rightContent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['left', 'right', 'full'], default: 'full' }),
    __metadata("design:type", String)
], Section.prototype, "contentLayout", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Section.prototype, "hasCards", void 0);
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
                icon: String,
                features: [String],
            },
        ],
    }),
    __metadata("design:type", Array)
], Section.prototype, "cards", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '#ffffff' }),
    __metadata("design:type", String)
], Section.prototype, "backgroundColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'py-16' }),
    __metadata("design:type", String)
], Section.prototype, "spacing", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Section.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Section.prototype, "order", void 0);
exports.Section = Section = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Section);
exports.SectionSchema = mongoose_1.SchemaFactory.createForClass(Section);
//# sourceMappingURL=section.schema.js.map