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
exports.BannerSchema = exports.Banner = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Banner = class Banner {
    backgroundImage;
    backgroundImageAlt;
    textOverlay;
    buttons;
    height;
    isActive;
    order;
};
exports.Banner = Banner;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Banner.prototype, "backgroundImage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Banner.prototype, "backgroundImageAlt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            heading: String,
            subheading: String,
            description: String,
            position: {
                type: String,
                enum: ['left', 'center', 'right'],
                default: 'center',
            },
            textColor: { type: String, default: '#ffffff' },
            backgroundColor: String,
            opacity: { type: Number, min: 0, max: 1, default: 0.8 },
        },
    }),
    __metadata("design:type", Object)
], Banner.prototype, "textOverlay", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                text: { type: String, required: true },
                url: { type: String, required: true },
                variant: {
                    type: String,
                    enum: ['primary', 'secondary', 'outline'],
                    default: 'primary',
                },
                size: {
                    type: String,
                    enum: ['small', 'medium', 'large'],
                    default: 'medium',
                },
            },
        ],
    }),
    __metadata("design:type", Array)
], Banner.prototype, "buttons", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 200, max: 1000, default: 500 }),
    __metadata("design:type", Number)
], Banner.prototype, "height", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Banner.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Banner.prototype, "order", void 0);
exports.Banner = Banner = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Banner);
exports.BannerSchema = mongoose_1.SchemaFactory.createForClass(Banner);
//# sourceMappingURL=banner.schema.js.map