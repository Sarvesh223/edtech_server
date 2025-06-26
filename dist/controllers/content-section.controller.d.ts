import { ContentSectionService } from '../services/content-section.service';
import { CreateContentSectionDto } from '../dto/create-content-section.dto';
import { UpdateContentSectionDto } from '../dto/update-content-section.dto';
export declare class ContentSectionController {
    private readonly contentSectionService;
    constructor(contentSectionService: ContentSectionService);
    create(createContentSectionDto: CreateContentSectionDto): Promise<import("../schemas/content-section.schema").ContentSection>;
    findAll(page?: number, limit?: number): Promise<{
        data: import("../schemas/content-section.schema").ContentSection[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): Promise<import("../schemas/content-section.schema").ContentSection>;
    update(id: string, updateContentSectionDto: UpdateContentSectionDto): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/content-section.schema").ContentSection;
    }>;
    updateContent(id: string, updateData: Partial<Pick<CreateContentSectionDto, 'heading' | 'subheading' | 'description' | 'cards'>>): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/content-section.schema").ContentSection;
    }>;
    updateSettings(id: string, updateData: Partial<Pick<CreateContentSectionDto, 'headingPosition' | 'contentPosition' | 'isSlideCards' | 'isGridCards' | 'backgroundColor' | 'order'>>): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/content-section.schema").ContentSection;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
    toggleStatus(id: string): Promise<import("../schemas/content-section.schema").ContentSection>;
}
