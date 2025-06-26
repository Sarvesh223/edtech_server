declare class UpdateFooterLinkDto {
    text?: string;
    url?: string;
    isExternal?: boolean;
}
declare class UpdateLinkGroupDto {
    title?: string;
    links?: UpdateFooterLinkDto[];
}
declare class UpdateSocialLinkDto {
    platform?: string;
    url?: string;
    icon?: string;
}
declare class UpdateContactInfoDto {
    email?: string;
    phone?: string;
    address?: string;
}
export declare class UpdateFooterDto {
    logo?: string;
    logoAlt?: string;
    description?: string;
    linkGroups?: UpdateLinkGroupDto[];
    socialLinks?: UpdateSocialLinkDto[];
    contactInfo?: UpdateContactInfoDto;
    copyrightText?: string;
    backgroundColor?: string;
    textColor?: string;
    isActive?: boolean;
}
export {};
