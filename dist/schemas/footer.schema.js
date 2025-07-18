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
exports.FooterSchema = exports.Footer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Footer = class Footer {
    logo;
    logoAlt;
    description;
    linkGroups;
    socialLinks;
    contactInfo;
    copyrightText;
    backgroundColor;
    textColor;
    isActive;
};
exports.Footer = Footer;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Footer.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Footer.prototype, "logoAlt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Footer.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                title: { type: String, required: true },
                links: [
                    {
                        text: { type: String, required: true },
                        url: { type: String, required: true },
                        isExternal: { type: Boolean, default: false },
                    },
                ],
            },
        ],
    }),
    __metadata("design:type", Array)
], Footer.prototype, "linkGroups", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                platform: { type: String, required: true },
                url: { type: String, required: true },
                icon: { type: String, required: true },
            },
        ],
    }),
    __metadata("design:type", Array)
], Footer.prototype, "socialLinks", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            email: String,
            phone: String,
            address: String,
        },
    }),
    __metadata("design:type", Object)
], Footer.prototype, "contactInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Footer.prototype, "copyrightText", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '#1a202c' }),
    __metadata("design:type", String)
], Footer.prototype, "backgroundColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '#ffffff' }),
    __metadata("design:type", String)
], Footer.prototype, "textColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Footer.prototype, "isActive", void 0);
exports.Footer = Footer = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Footer);
exports.FooterSchema = mongoose_1.SchemaFactory.createForClass(Footer);
//# sourceMappingURL=footer.schema.js.map