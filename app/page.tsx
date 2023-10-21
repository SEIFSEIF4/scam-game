import Link from "next/link";
//Components
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button } from "@/components/ui/button";
import PageAvatar from "@/components/PageAvatar";
import PageCoverImage from "@/components/PageCoverImage";

export default function Home() {
  return (
    <>
      <PageCoverImage
        src="/assets/bg-pc.png"
        alt="Home Image"
        className="z-[-1] lg:bg-[url('/assets/scam-outline.png')] bg-no-repeat bg-contain bg-center"
      />
      <MaxWidthWrapper>
        <section className="flex flex-col 2xl:justify-around items-center justify-center min-h-screen gap-4 py-8 lg:flex-row lg:justify-between md:py-10 z-10  select-none">
          {/* <ThemeSwitch /> */}
          <div className="p-5 pl-0 mr-5">
            <h1 className="xlg:text-9xl md:text-8xl text-6xl animate-slide-right 2xl:text-14 xl:text-[176px] font-bold text-start text-primary">
              SCAM
            </h1>
            <p className="ml-14 text-xl md:text-3xl xl:text-5xl animate-slide-left  xl:ml-20 text-start flex-grow-1">
              Where Strategy Meets Fun!
            </p>
            <div className="p-5 mt-6 flex justify-around animate-fade-In ">
              <Button
                className="mx-3 md-p-10 lg:py-5 lg:px-8 "
                size={"lg"}
                asChild
              >
                <Link href="/order">Order Now </Link>
              </Button>
              <Button
                className="mx-3 md-p-10 lg:py-5 lg:px-8"
                size={"lg"}
                variant={"secondary"}
                asChild
              >
                <Link href="/order">How To Play</Link>
              </Button>
            </div>
          </div>

          <PageAvatar
            src="/assets/home.png"
            alt="Home Image"
            width={390}
            height={472}
            className="animate-fadeIn-Up"
          />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
