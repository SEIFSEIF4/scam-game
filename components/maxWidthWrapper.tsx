import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[2000px] px-2.5 md:px-20",
        className // merge the class names
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
