import React from "react";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme-switch";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import PageContent from "@/components/PageContent";
import PageAvatar from "@/components/PageAvatar";
import { Light } from "@/components/icons";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:flex-row md:py-10">
        <ThemeSwitch />
        <PageContent
          h1Text="About Us"
          pText="A dynamic card game blending strategy and fun. Unique cards, strategic play for endless fun!"
        />
        <div className="relative ">
          <div className="absolute rotate-[-37deg] top-0 left-[-13px]">
            <Light />
          </div>
          <PageAvatar
            src="/assets/AboutUs.png"
            alt="AboutUs Image"
            width={906}
            height={907}
          />
        </div>

        <Button className="fixed bottom-5 right-10" asChild>
          <Link href="/how-to-play">How to Play ➡️</Link>
        </Button>
      </section>
    </MaxWidthWrapper>
  );
}
