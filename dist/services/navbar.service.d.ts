import { Model } from 'mongoose';
import { Navbar, NavbarDocument } from '../schemas/navbar.schema';
import { CreateNavbarDto } from '../dto/create-navbar.dto';
export declare class NavbarService {
    private navbarModel;
    constructor(navbarModel: Model<NavbarDocument>);
    create(createNavbarDto: CreateNavbarDto): Promise<Navbar>;
    findActive(): Promise<Navbar>;
    findAll(): Promise<Navbar[]>;
    findOne(id: string): Promise<Navbar>;
    update(id: string, updateNavbarDto: Partial<CreateNavbarDto> | CreateNavbarDto): Promise<Navbar>;
    remove(id: string): Promise<void>;
}
