"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const navbar_schema_1 = require("../schemas/navbar.schema");
const banner_schema_1 = require("../schemas/banner.schema");
const content_section_schema_1 = require("../schemas/content-section.schema");
const section_schema_1 = require("../schemas/section.schema");
const footer_schema_1 = require("../schemas/footer.schema");
const navbar_controller_1 = require("../controllers/navbar.controller");
const banner_controller_1 = require("../controllers/banner.controller");
const navbar_service_1 = require("../services/navbar.service");
const banner_service_1 = require("../services/banner.service");
const content_section_controller_1 = require("../controllers/content-section.controller");
const section_controller_1 = require("../controllers/section.controller");
const footer_controller_1 = require("../controllers/footer.controller");
const content_section_service_1 = require("../services/content-section.service");
const section_service_1 = require("../services/section.service");
const footer_service_1 = require("../services/footer.service");
let CmsModule = class CmsModule {
};
exports.CmsModule = CmsModule;
exports.CmsModule = CmsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: navbar_schema_1.Navbar.name, schema: navbar_schema_1.NavbarSchema },
                { name: banner_schema_1.Banner.name, schema: banner_schema_1.BannerSchema },
                { name: content_section_schema_1.ContentSection.name, schema: content_section_schema_1.ContentSectionSchema },
                { name: section_schema_1.Section.name, schema: section_schema_1.SectionSchema },
                { name: footer_schema_1.Footer.name, schema: footer_schema_1.FooterSchema },
            ]),
        ],
        controllers: [
            navbar_controller_1.NavbarController,
            banner_controller_1.BannerController,
            content_section_controller_1.ContentSectionController, section_controller_1.SectionController, footer_controller_1.FooterController
        ],
        providers: [
            navbar_service_1.NavbarService,
            banner_service_1.BannerService,
            content_section_service_1.ContentSectionService,
            section_service_1.SectionService,
            footer_service_1.FooterService,
        ],
        exports: [
            navbar_service_1.NavbarService,
            banner_service_1.BannerService,
            content_section_service_1.ContentSectionService,
            section_service_1.SectionService,
            footer_service_1.FooterService,
        ],
    })
], CmsModule);
//# sourceMappingURL=cms.module.js.map