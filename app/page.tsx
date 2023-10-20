import Link from "next/link";
//Components
import { ThemeSwitch } from "@/components/theme-switch";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button } from "@/components/ui/button";
import PageAvatar from "@/components/PageAvatar";
import PageCoverImage from "@/components/PageCoverImage";
import { Mock } from "@/components/Mock";

export default function Home() {
  return (
    <>
      <PageCoverImage
        src="/assets/bg-mobile.png"
        alt="Home Image"
        className="z-[-1]"
      />
      <MaxWidthWrapper>
        <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:flex-row md:py-10 z-10">
          <ThemeSwitch />
          <div className="p-5">
            <h1 className="text-6xl font-bold text-start text-primary">SCAM</h1>
            <p className="ml-10 text-lg text-start">
              Where Strategy Meets Fun!
            </p>
          </div>
          <div>
            <Button className="mx-3" asChild>
              <Link href="/order">Order Now</Link>
            </Button>
            <Button className="mx-3" asChild variant={"secondary"}>
              <Link href="/how-to-play">How To Play</Link>
            </Button>
          </div>
          {Math.random() >= 0.5 ? (
            <PageAvatar
              src="/assets/home.png"
              alt="Home Image"
              width={390}
              height={472}
            />
          ) : (
            <Mock width={4000} height={3200} />
          )}
        </section>
      </MaxWidthWrapper>
    </>
  );
}
