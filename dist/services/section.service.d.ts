import { Model } from 'mongoose';
import { Section, SectionDocument } from '../schemas/section.schema';
import { CreateSectionDto } from '../dto/create-section.dto';
export declare class SectionService {
    private sectionModel;
    constructor(sectionModel: Model<SectionDocument>);
    create(createSectionDto: CreateSectionDto): Promise<Section>;
    findAll(page?: number, limit?: number): Promise<{
        sections: Section[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<Section>;
    update(id: string, updateSectionDto: Partial<CreateSectionDto>): Promise<Section>;
    remove(id: string): Promise<void>;
    toggleStatus(id: string): Promise<Section>;
}
