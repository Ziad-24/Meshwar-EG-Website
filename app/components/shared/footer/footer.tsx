"use client";

import type { IconProps } from "@iconify/react";
import React from "react";
import { Link, Spacer } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

type SocialIconProps = Omit<IconProps, "icon">;

const navLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms and Conditions",
    href: "/terms-and-conditions",
  },
  {
    name: "Refund Policy",
    href: "/refund-policy",
  },
];

const socialItems = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@meshwar.eg",
    icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:tiktok" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/meshwar_eg",
    icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/uwYUSJtbFeZBMoip/?mibextid=LQQJ4d",
    icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook" />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="flex items-center justify-center">
          <Image src="/identity/logo/blue-logo.png" alt="Meshwar Logo" width={180} height={60} />
        </div>
        <Spacer y={4} />
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {navLinks.map((item) => (
            <Link key={item.name} className="text-default-500" href={item.href} size="sm">
              {item.name}
            </Link>
          ))}
        </div>
        <Spacer y={6} />
        <div className="flex justify-center gap-x-4">
          {socialItems.map((item) => (
            <Link key={item.name} isExternal className="text-default-400" href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="w-5" />
            </Link>
          ))}
        </div>
        <Spacer y={4} />
        <p className="mt-1 text-center text-small text-default-400">
          &copy; {currentYear} Meshwar EG. All rights reserved. <br />
          4 Hafez Ramadan St., 2 Delta Flower, Nasr City, Cairo, Egypt
          <br />
          Email: <a href="mailto:info@meshwareg.com">info@meshwareg.com</a>
        </p>
      </div>
    </footer>
  );
}
