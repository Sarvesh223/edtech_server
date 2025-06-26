import { Model } from 'mongoose';
import { ContentSection, ContentSectionDocument } from '../schemas/content-section.schema';
import { CreateContentSectionDto } from 'src/dto/create-content-section.dto';
import { UpdateContentSectionDto } from 'src/dto/update-content-section.dto';
export declare class ContentSectionService {
    private contentSectionModel;
    constructor(contentSectionModel: Model<ContentSectionDocument>);
    create(createContentSectionDto: CreateContentSectionDto): Promise<ContentSection>;
    findAll(page?: number, limit?: number): Promise<{
        data: ContentSection[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): Promise<ContentSection>;
    update(id: string, updateContentSectionDto: UpdateContentSectionDto): Promise<ContentSection>;
    updateContent(id: string, updateData: Partial<Pick<CreateContentSectionDto, 'heading' | 'subheading' | 'description' | 'cards'>>): Promise<ContentSection>;
    updateSettings(id: string, updateData: Partial<Pick<CreateContentSectionDto, 'headingPosition' | 'contentPosition' | 'isSlideCards' | 'isGridCards' | 'backgroundColor' | 'order'>>): Promise<ContentSection>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
    toggleStatus(id: string): Promise<ContentSection>;
}
