import { Document, Schema as MongooseSchema } from 'mongoose';
export type SectionDocument = Section & Document;
export declare class Section {
    title: string;
    heading: string;
    headingPosition: 'left' | 'center' | 'right';
    subheading: string;
    description: string;
    leftContent: string;
    rightContent: string;
    contentLayout: 'left' | 'right' | 'full';
    hasCards: boolean;
    cards: Array<{
        title: string;
        description?: string;
        image?: string;
        imageAlt?: string;
        url?: string;
        buttonText?: string;
        buttonUrl?: string;
        icon?: string;
        features?: string[];
    }>;
    backgroundColor: string;
    spacing: string;
    isActive: boolean;
    order: number;
}
export declare const SectionSchema: MongooseSchema<Section, import("mongoose").Model<Section, any, any, any, Document<unknown, any, Section, any> & Section & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Section, Document<unknown, {}, import("mongoose").FlatRecord<Section>, {}> & import("mongoose").FlatRecord<Section> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
