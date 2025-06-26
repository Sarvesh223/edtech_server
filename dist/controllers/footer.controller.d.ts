import { FooterService } from '../services/footer.service';
import { CreateFooterDto } from '../dto/create-footer.dto';
import { UpdateFooterDto } from '../dto/update-footer.dto';
export declare class FooterController {
    private readonly footerService;
    constructor(footerService: FooterService);
    create(createFooterDto: CreateFooterDto): Promise<import("../schemas/footer.schema").Footer>;
    findActive(): Promise<import("../schemas/footer.schema").Footer>;
    findOne(id: string): Promise<import("../schemas/footer.schema").Footer>;
    update(id: string, updateFooterDto: UpdateFooterDto): Promise<import("../schemas/footer.schema").Footer>;
    remove(id: string): Promise<void>;
    toggleStatus(id: string): Promise<import("../schemas/footer.schema").Footer>;
    findAll(): Promise<import("../schemas/footer.schema").Footer[]>;
}
