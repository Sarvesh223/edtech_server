import { NavbarService } from '../services/navbar.service';
import { CreateNavbarDto } from '../dto/create-navbar.dto';
export declare class NavbarController {
    private readonly navbarService;
    constructor(navbarService: NavbarService);
    create(createNavbarDto: CreateNavbarDto): Promise<import("../schemas/navbar.schema").Navbar>;
    findActive(): Promise<import("../schemas/navbar.schema").Navbar>;
    findAll(): Promise<import("../schemas/navbar.schema").Navbar[]>;
    findOne(id: string): Promise<import("../schemas/navbar.schema").Navbar>;
    updateComplete(id: string, createNavbarDto: CreateNavbarDto): Promise<import("../schemas/navbar.schema").Navbar>;
    remove(id: string): Promise<void>;
}
