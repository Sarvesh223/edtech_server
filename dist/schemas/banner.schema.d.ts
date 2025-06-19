import { Document, Schema as MongooseSchema } from 'mongoose';
export type BannerDocument = Banner & Document;
export declare class Banner {
    backgroundImage: string;
    backgroundImageAlt: string;
    textOverlay: {
        heading?: string;
        subheading?: string;
        description?: string;
        position: 'left' | 'center' | 'right';
        textColor: string;
        backgroundColor?: string;
        opacity: number;
    };
    buttons: Array<{
        text: string;
        url: string;
        variant: 'primary' | 'secondary' | 'outline';
        size: 'small' | 'medium' | 'large';
    }>;
    height: number;
    isActive: boolean;
    order: number;
}
export declare const BannerSchema: MongooseSchema<Banner, import("mongoose").Model<Banner, any, any, any, Document<unknown, any, Banner, any> & Banner & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Banner, Document<unknown, {}, import("mongoose").FlatRecord<Banner>, {}> & import("mongoose").FlatRecord<Banner> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
