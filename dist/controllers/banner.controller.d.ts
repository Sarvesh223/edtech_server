import { BannerService } from '../services/banner.service';
import { CreateBannerDto } from '../dto/create-banner.dto';
import { UpdateBannerDto } from '../dto/update-banner.dto';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    create(createBannerDto: CreateBannerDto): Promise<import("../schemas/banner.schema").Banner>;
    findAll(page?: number, limit?: number): Promise<{
        banners: import("../schemas/banner.schema").Banner[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<import("../schemas/banner.schema").Banner>;
    update(id: string, updateBannerDto: UpdateBannerDto): Promise<import("../schemas/banner.schema").Banner>;
    replaceUpdate(id: string, updateBannerDto: CreateBannerDto): Promise<import("../schemas/banner.schema").Banner>;
    remove(id: string): Promise<void>;
    toggleStatus(id: string): Promise<import("../schemas/banner.schema").Banner>;
    activate(id: string): Promise<import("../schemas/banner.schema").Banner>;
    deactivate(id: string): Promise<import("../schemas/banner.schema").Banner>;
    updateOrder(id: string, body: {
        order: number;
    }): Promise<import("../schemas/banner.schema").Banner>;
}
