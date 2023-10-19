"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import the useRouter

// Components
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme-switch";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import PageContent from "@/components/PageContent";
import PageAvatar from "@/components/PageAvatar";

export default function Home() {
    return (
        <MaxWidthWrapper>
            <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:flex-row md:py-10">
                <PageContent
                    h1Text="About Us"
                    pText="A dynamic card game blending strategy and fun. Unique cards, strategic play for endless fun!"
                />

                <PageAvatar
                    src="/assets/AboutUs.png"
                    alt="AboutUs Image"
                    width={369}
                    height={306}
                />

                <Button className="fixed bottom-5 right-10" asChild>
                    <Link href="/how-to-play">How to Play ➡️</Link>
                </Button>
                <ThemeSwitch />
            </section>
        </MaxWidthWrapper>
    );
}
