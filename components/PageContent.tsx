import React from "react";
import { QuestionMark } from "./icons";

interface AboutSectionProps {
  h1Text: string;
  pText?: string;
}

export default function PageContent({ h1Text, pText }: AboutSectionProps) {
  return (
    <div className="p-5">
      <h1 className="text-6xl font-bold text-start text-primary">{h1Text}</h1>
      <p className="mt-4 text-lg text-start">{pText}</p>
    </div>
  );
}
