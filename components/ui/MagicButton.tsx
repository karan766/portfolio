import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none transition-smooth hover:scale-105 hover:shadow-lg hover:shadow-purple/20 will-change-transform"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-smooth hover:bg-slate-900 ${otherClasses}`}
      >
        {position === "left" && (
          <span className="transition-smooth hover:-translate-x-1">
            {icon}
          </span>
        )}
        <span className="transition-smooth hover:scale-105">
          {title}
        </span>
        {position === "right" && (
          <span className="transition-smooth hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
