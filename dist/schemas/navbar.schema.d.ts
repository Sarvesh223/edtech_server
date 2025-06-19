import { Document } from 'mongoose';
export type NavbarDocument = Navbar & Document;
export declare class Navbar {
    logo: string;
    logoAlt: string;
    menuItems: Array<{
        title: string;
        url: string;
        isExternal: boolean;
        children?: Array<{
            title: string;
            url: string;
            isExternal: boolean;
        }>;
    }>;
    ctaButton: {
        text: string;
        url: string;
        variant: 'primary' | 'secondary' | 'outline';
    };
    isActive: boolean;
}
export declare const NavbarSchema: import("mongoose").Schema<Navbar, import("mongoose").Model<Navbar, any, any, any, Document<unknown, any, Navbar, any> & Navbar & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Navbar, Document<unknown, {}, import("mongoose").FlatRecord<Navbar>, {}> & import("mongoose").FlatRecord<Navbar> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
