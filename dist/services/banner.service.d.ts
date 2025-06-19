import { Model } from 'mongoose';
import { Banner, BannerDocument } from '../schemas/banner.schema';
import { CreateBannerDto } from '../dto/create-banner.dto';
import { UpdateBannerDto } from '../dto/update-banner.dto';
export declare class BannerService {
    private bannerModel;
    constructor(bannerModel: Model<BannerDocument>);
    create(createBannerDto: CreateBannerDto): Promise<Banner>;
    findAll(page?: number, limit?: number): Promise<{
        banners: Banner[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<Banner>;
    update(id: string, updateBannerDto: UpdateBannerDto): Promise<Banner>;
    replaceUpdate(id: string, updateBannerDto: CreateBannerDto): Promise<Banner>;
    remove(id: string): Promise<void>;
    toggleStatus(id: string): Promise<Banner>;
    updateStatus(id: string, isActive: boolean): Promise<Banner>;
    updateOrder(id: string, order: number): Promise<Banner>;
    updateField(id: string, field: keyof Banner, value: any): Promise<Banner>;
    bulkUpdate(filter: any, updateData: Partial<Banner>): Promise<{
        modifiedCount: number;
    }>;
    updateBannerImage(id: string, backgroundImage: string, backgroundImageAlt?: string): Promise<Banner>;
    updateTextOverlay(id: string, textOverlay: UpdateBannerDto['textOverlay']): Promise<Banner>;
    updateButtons(id: string, buttons: UpdateBannerDto['buttons']): Promise<Banner>;
}
