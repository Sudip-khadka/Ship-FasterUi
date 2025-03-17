import { Progress } from "../ui/progress";
import React from "react";
function ProgressBar({
  className = "",
  rootClassName = "",
  position = "top",
  label,
  description,
  icon,
  progress,
  indicatorClassName="",
  
}: {
    progress:number;
  description?: string;
  label?: string;
  position?: "top" | "center" | "bottom";
  className?: string;
  rootClassName?: string;
  indicatorClassName?: string;
  icon?: React.ReactNode;
}) {
  
  return (
    <div className={"flex flex-col gap-2 " + className}>
      <div className="topComp text-secondary-900 font-medium text-[1rem] flex justify-between w-full">
        {label && <p className="line-clamp-1 overflow-hidden max-w-[400px]">{label}</p>}
        {position === "top" && <p>{progress} %</p>}
      </div>
      <div className="centerComp flex items-center gap-2 w-full">
        {position === "center" ? (
          <div className="wrapper flex items-center justify-between w-full gap-3">
            <Progress
              value={progress}
              rootClassName={rootClassName}
            indicatorClassName={indicatorClassName}
            />
            <p>{progress}%</p>
          </div>
        ) : (
          <Progress
            value={progress}
            rootClassName={rootClassName}
            indicatorClassName={indicatorClassName}
          />
        )}
      </div>
      <div
        className={`descriptionComp flex items-center ${
          position === "top" ? "justify-between " : ""
        }`}
      >
        <div
          className={`description-wrapper w-full flex items-center ${
            position === "top" ? "justify-between " : " gap-2"
          }`}
        >
          <p className="text-secondary line-clamp-1 max-w-[400px]">{description}</p>
          {icon &&icon}
        </div>
        {position === "bottom" && <p>{progress}%</p>}
      </div>
    </div>
  );
}

export default ProgressBar;
