import Image from "next/image";
import React from "react";

interface PageAvatarProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function PageCoverImage({
  src,
  alt = "Page Cover Image", //  default value if none is passed in
  className,
}: PageAvatarProps) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
    />
  );
}
