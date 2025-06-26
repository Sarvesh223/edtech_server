export declare class CardDto {
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
}
export declare class CreateContentSectionDto {
    heading: string;
    headingPosition: 'left' | 'center' | 'right';
    subheading?: string;
    description?: string;
    contentPosition: 'left' | 'center' | 'right';
    isSlideCards?: boolean;
    isGridCards?: boolean;
    cards?: CardDto[];
    backgroundColor?: string;
    isActive?: boolean;
    order?: number;
}
