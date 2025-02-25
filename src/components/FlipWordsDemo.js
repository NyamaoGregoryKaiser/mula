import React from "react";
import { FlipWords } from "@/components/flip-words";

export function FlipWordsDemo() {
  const words = ["safely", "easily", "efficiently", "nicely"];

  return (
    (<div className="h-[30rem]  flex justify-center items-center px-4">
      <div
        className="relative top-[-80px] text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Mula
        <FlipWords words={words} /> <br />
        manages your finances
      </div>
    </div>)
  );
}
