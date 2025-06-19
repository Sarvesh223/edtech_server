declare class TextOverlayDto {
    heading?: string;
    subheading?: string;
    description?: string;
    position: 'left' | 'center' | 'right';
    textColor: string;
    backgroundColor?: string;
    opacity: number;
}
declare class BannerButtonDto {
    text: string;
    url: string;
    variant: 'primary' | 'secondary' | 'outline';
    size: 'small' | 'medium' | 'large';
}
export declare class CreateBannerDto {
    backgroundImage: string;
    backgroundImageAlt?: string;
    textOverlay?: TextOverlayDto;
    buttons?: BannerButtonDto[];
    height?: number;
    isActive?: boolean;
    order?: number;
}
export {};
