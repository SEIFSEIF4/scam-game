//Components
import { ThemeSwitch } from "@/components/theme-switch";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import Link from "next/link";

export default function Home() {
    return (
        <MaxWidthWrapper>
            <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:flex-row md:py-10">
                main
                <Link href="/about">as</Link>
                <ThemeSwitch />
            </section>
        </MaxWidthWrapper>
    );
}
