"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "0px 0px -100px 0px" });

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate("span", 
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration: duration, delay: stagger(0.2) }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-white  opacity-0"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-white text-[40px] text-center p-4 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
