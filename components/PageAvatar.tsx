import Image from "next/image";
import React from "react";

interface PageAvatarProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
}

export default function PageAvatar({
  src,
  alt = "Default Alt Text", //  default value if none is passed in
  width,
  height,
  className,
}: PageAvatarProps) {
  return (
    <div className="p-5">
      <Image
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}
