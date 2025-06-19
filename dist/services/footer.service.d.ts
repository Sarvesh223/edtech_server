import { Model } from 'mongoose';
import { Footer, FooterDocument } from '../schemas/footer.schema';
import { CreateFooterDto } from '../dto/create-footer.dto';
import { UpdateFooterDto } from '../dto/update-footer.dto';
export declare class FooterService {
    private footerModel;
    constructor(footerModel: Model<FooterDocument>);
    create(createFooterDto: CreateFooterDto): Promise<Footer>;
    findAll(): Promise<Footer[]>;
    findActive(): Promise<Footer>;
    findOne(id: string): Promise<Footer>;
    update(id: string, updateFooterDto: UpdateFooterDto): Promise<Footer>;
    remove(id: string): Promise<void>;
    toggleStatus(id: string): Promise<Footer>;
}
