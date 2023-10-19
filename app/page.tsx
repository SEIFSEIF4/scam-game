import Link from "next/link";
//Components
import { ThemeSwitch } from "@/components/theme-switch";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button } from "@/components/ui/button";
import PageAvatar from "@/components/PageAvatar";

export default function Home() {
    return (
        <MaxWidthWrapper>
            <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:flex-row md:py-10">
                <ThemeSwitch />
                <div className="p-5">
                    <h1 className="text-6xl font-bold text-start text-primary">
                        SCAM
                    </h1>
                    <p className="ml-10 text-lg text-start">
                        Where Strategy Meets Fun!
                    </p>
                </div>
                <div>
                    <Button className="mx-3" asChild>
                        <Link href="/about">Order Now</Link>
                    </Button>
                    <Button className="mx-3" asChild variant={"secondary"}>
                        <Link href="/how-to-play">How To Play</Link>
                    </Button>
                </div>
                <PageAvatar
                    src="/assets/home.png"
                    alt="Home Image"
                    width={390}
                    height={472}
                />
            </section>
        </MaxWidthWrapper>
    );
}
