import { Document, Schema as MongooseSchema } from 'mongoose';
export type ContentSectionDocument = ContentSection & Document;
export declare class ContentSection {
    heading: string;
    headingPosition: 'left' | 'center' | 'right';
    subheading: string;
    description: string;
    contentPosition: 'left' | 'center' | 'right';
    isSlideCards: boolean;
    isGridCards: boolean;
    cards: Array<{
        title: string;
        description?: string;
        image?: string;
        imageAlt?: string;
        url?: string;
        buttonText?: string;
        buttonUrl?: string;
        tags?: string[];
        price?: string;
        originalPrice?: string;
        rating?: number;
        reviewCount?: number;
    }>;
    backgroundColor: string;
    isActive: boolean;
    order: number;
}
export declare const ContentSectionSchema: MongooseSchema<ContentSection, import("mongoose").Model<ContentSection, any, any, any, Document<unknown, any, ContentSection, any> & ContentSection & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContentSection, Document<unknown, {}, import("mongoose").FlatRecord<ContentSection>, {}> & import("mongoose").FlatRecord<ContentSection> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
