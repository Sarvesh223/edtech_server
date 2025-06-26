declare class UpdateCardDto {
    title?: string;
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
export declare class UpdateContentSectionDto {
    heading?: string;
    headingPosition?: 'left' | 'center' | 'right';
    subheading?: string;
    description?: string;
    contentPosition?: 'left' | 'center' | 'right';
    isSlideCards?: boolean;
    isGridCards?: boolean;
    cards?: UpdateCardDto[];
    backgroundColor?: string;
    isActive?: boolean;
    order?: number;
}
export {};
