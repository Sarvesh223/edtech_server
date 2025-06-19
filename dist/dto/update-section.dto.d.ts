export declare class UpdateSectionCardDto {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    url?: string;
    buttonText?: string;
    buttonUrl?: string;
    icon?: string;
    features?: string[];
}
export declare class UpdateSectionDto {
    title?: string;
    heading?: string;
    headingPosition?: 'left' | 'center' | 'right';
    subheading?: string;
    description?: string;
    leftContent?: string;
    rightContent?: string;
    contentLayout?: 'left' | 'right' | 'full';
    hasCards?: boolean;
    cards?: UpdateSectionCardDto[];
    backgroundColor?: string;
    spacing?: string;
    isActive?: boolean;
    order?: number;
}
