declare class MenuItemDto {
    title: string;
    url: string;
    isExternal?: boolean;
    children?: MenuItemDto[];
}
declare class CtaButtonDto {
    text: string;
    url: string;
    variant: 'primary' | 'secondary' | 'outline';
}
export declare class CreateNavbarDto {
    logo: string;
    logoAlt: string;
    menuItems: MenuItemDto[];
    ctaButton: CtaButtonDto;
    isActive?: boolean;
}
export { MenuItemDto, CtaButtonDto };
