import React from "react";
import {
  DiscordIconGlass,
  FacebookIconGlass,
  InstagramIconGlass,
} from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SideIcons() {
  return (
    <div className="flex flex-row align-center justify-around w-200px fixed inset-0 top-auto bottom-5 mx-auto w-32">
      <Link href={siteConfig.links.discord}>
        <DiscordIconGlass />
      </Link>
      <Link href={siteConfig.links.facebook}>
        <FacebookIconGlass />
      </Link>
      <Link href={siteConfig.links.instagram}>
        <InstagramIconGlass />
      </Link>
    </div>
  );
}
