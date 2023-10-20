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
      <section className="flex flex-col items-center justify-between min-h-screen gap-4 py-8 md:flex-row md:py-10">
        {/* <ThemeSwitch /> */}
        <div className="text-center">
          <PageContent
            h1Text="Order Scam now
          and enjoy the endless fun!"
          />

          <Button asChild>
            <Link href="#" className="text-center">
              order now
            </Link>
          </Button>
        </div>

        <PageAvatar
          className="fixed bottom-0 left-0 right-0  mx-auto select-none "
          src="/assets/order.png"
          alt="Order Image"
          width={343}
          height={388}
        />

        <Button className="fixed bottom-5 right-10" asChild>
          <Link href="/contact">
            NExt
            <MoveRight />
          </Link>
        </Button>
      </section>
    </MaxWidthWrapper>
  );
}
