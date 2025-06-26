import { SectionService } from '../services/section.service';
import { CreateSectionDto } from '../dto/create-section.dto';
import { UpdateSectionDto } from '../dto/update-section.dto';
export declare class SectionController {
    private readonly sectionService;
    constructor(sectionService: SectionService);
    create(createSectionDto: CreateSectionDto): Promise<import("../schemas/section.schema").Section>;
    findAll(page?: number, limit?: number): Promise<{
        sections: import("../schemas/section.schema").Section[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<import("../schemas/section.schema").Section>;
    update(id: string, updateSectionDto: UpdateSectionDto): Promise<import("../schemas/section.schema").Section>;
    remove(id: string): Promise<void>;
    toggleStatus(id: string): Promise<import("../schemas/section.schema").Section>;
}
