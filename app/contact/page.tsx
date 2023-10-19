import Link from "next/link";
import { MoveRight } from "lucide-react";

//Components
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme-switch";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import PageContent from "@/components/PageContent";
import PageAvatar from "@/components/PageAvatar";

export default function Order() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:flex-row md:py-10">
        <PageContent h1Text="Contact us" />

        <PageAvatar
          src="/assets/contact.png"
          alt="AboutUs Image"
          width={343}
          height={388}
        />

        <div className="fixed bottom-0 min-w-full bg-red-500 h-1/4"></div>

        <ThemeSwitch />
      </section>
    </MaxWidthWrapper>
  );
}
