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
exports.NavbarSchema = exports.Navbar = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const MenuItemSchema = {
    title: { type: String, required: true },
    url: { type: String, required: true },
    isExternal: { type: Boolean, default: false },
    children: [
        {
            title: { type: String, required: true },
            url: { type: String, required: true },
            isExternal: { type: Boolean, default: false },
        },
    ],
};
let Navbar = class Navbar {
    logo;
    logoAlt;
    menuItems;
    ctaButton;
    isActive;
};
exports.Navbar = Navbar;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Navbar.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Navbar.prototype, "logoAlt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [MenuItemSchema],
        required: true,
    }),
    __metadata("design:type", Array)
], Navbar.prototype, "menuItems", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            text: { type: String, required: true },
            url: { type: String, required: true },
            variant: {
                type: String,
                enum: ['primary', 'secondary', 'outline'],
                default: 'primary',
            },
        },
        required: true,
    }),
    __metadata("design:type", Object)
], Navbar.prototype, "ctaButton", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Navbar.prototype, "isActive", void 0);
exports.Navbar = Navbar = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Navbar);
exports.NavbarSchema = mongoose_1.SchemaFactory.createForClass(Navbar);
//# sourceMappingURL=navbar.schema.js.map