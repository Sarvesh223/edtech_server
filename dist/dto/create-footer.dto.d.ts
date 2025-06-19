declare class FooterLinkDto {
    text: string;
    url: string;
    isExternal?: boolean;
}
declare class LinkGroupDto {
    title: string;
    links: FooterLinkDto[];
}
declare class SocialLinkDto {
    platform: string;
    url: string;
    icon: string;
}
declare class ContactInfoDto {
    email?: string;
    phone?: string;
    address?: string;
}
export declare class CreateFooterDto {
    logo: string;
    logoAlt?: string;
    description?: string;
    linkGroups?: LinkGroupDto[];
    socialLinks?: SocialLinkDto[];
    contactInfo?: ContactInfoDto;
    copyrightText?: string;
    backgroundColor?: string;
    textColor?: string;
    isActive?: boolean;
}
export {};
