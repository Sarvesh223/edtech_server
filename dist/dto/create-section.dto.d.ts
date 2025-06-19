declare class SectionCardDto {
    title: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    url?: string;
    buttonText?: string;
    buttonUrl?: string;
    icon?: string;
    features?: string[];
}
export declare class CreateSectionDto {
    title: string;
    heading: string;
    headingPosition: 'left' | 'center' | 'right';
    subheading?: string;
    description?: string;
    leftContent?: string;
    rightContent?: string;
    contentLayout: 'left' | 'right' | 'full';
    hasCards?: boolean;
    cards?: SectionCardDto[];
    backgroundColor?: string;
    spacing?: string;
    isActive?: boolean;
    order?: number;
}
export {};
