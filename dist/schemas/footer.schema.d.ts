import { Document, Schema as MongooseSchema } from 'mongoose';
export type FooterDocument = Footer & Document;
export declare class Footer {
    logo: string;
    logoAlt: string;
    description: string;
    linkGroups: Array<{
        title: string;
        links: Array<{
            text: string;
            url: string;
            isExternal: boolean;
        }>;
    }>;
    socialLinks: Array<{
        platform: string;
        url: string;
        icon: string;
    }>;
    contactInfo: {
        email?: string;
        phone?: string;
        address?: string;
    };
    copyrightText: string;
    backgroundColor: string;
    textColor: string;
    isActive: boolean;
}
export declare const FooterSchema: MongooseSchema<Footer, import("mongoose").Model<Footer, any, any, any, Document<unknown, any, Footer, any> & Footer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Footer, Document<unknown, {}, import("mongoose").FlatRecord<Footer>, {}> & import("mongoose").FlatRecord<Footer> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
