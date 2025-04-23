import { IMenuItem, ISocials } from "@/types";
import { websiteLinks } from "./links";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    address: string;
    vatNumber: string;
    socials: ISocials;
} = {
    subheading: "Reliable rides. Fair pricing. Real safety. Always Meshwar.",
    quickLinks: [
        { text: "About Us", url: "/about-us" },
        { text: "Terms & Conditions", url: "/terms-and-conditions" },
        // { text: "Refund Policy", url: "/refund-policy" },
        { text: "Privacy Policy", url: "/privacy-policy" },
    ],
    address: "Hafez Ramadan 4 Delta Flowers 2 Nasr City, Cairo, Egypt",
    email: "info@meshwareg.com",
    telephone: "",
    vatNumber: "764-599-089",
    socials: {
        instagram: "https://www.instagram.com/meshwareg",
        facebook: "https://www.facebook.com/share/1DSHYJRTQP",
        tiktok: "https://www.tiktok.com/@meshwar.eg",
    }
};
