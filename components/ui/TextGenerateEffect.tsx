"use client";
import { useEffect, useState } from "react";
import { stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [isReady, setIsReady] = useState(false);
  const wordsArray = words.split(" ");
  
  useEffect(() => {
    // Immediately show content, then animate
    setIsReady(true);
    
    const timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          y: 0,
        },
        {
          duration: 0.5,
          delay: stagger(0.06),
          ease: [0.4, 0, 0.2, 1],
        }
      );
    }, 50); // Small delay to prevent flash

    return () => clearTimeout(timer);
  }, [animate]);

  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx}
              className={`${
                idx > 3 ? "text-purple" : "dark:text-white text-black"
              } inline-block transition-smooth`}
              style={{ 
                opacity: isReady ? 0.7 : 1, // Start with some opacity to prevent flash
                transform: "translateY(5px)",
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};