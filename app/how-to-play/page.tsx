import Link from "next/link";
import { MoveRight } from "lucide-react";

//Components
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme-switch";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import PageContent from "@/components/PageContent";
import PageAvatar from "@/components/PageAvatar";

export default function HowToPlayPage() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:flex-row md:py-10">
        <PageContent
          h1Text="How To Play"
          pText="Of course, You can't play 'Scam' 
          without knowing the rules of each card. Learn all you need to kickStart the game right here"
        />

        <PageAvatar
          src="/assets/How-To-Play.png"
          alt="AboutUs Image"
          width={342}
          height={340}
        />

        <Button className="fixed bottom-5 right-10" asChild>
          <Link href="/order">
            order
            <MoveRight />
          </Link>
        </Button>
        <ThemeSwitch />
      </section>
    </MaxWidthWrapper>
  );
}
