"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../../lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}
type PointerPosition = "leading" | "middle" | "trailing";
type PointerSide="top"|"bottom"|"right"|"left"
function TooltipContent({
  className,
  arrowClassName,
  sideOffset = 0,
  pointerPosition = "middle",
  side = "top",
  showArrow=false,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  arrowClassName?: string;
  pointerPosition?: PointerPosition;
  side?:PointerSide;
  showArrow?:boolean;
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        side={side}
        sideOffset={sideOffset}
        className={cn(
          "bg-primary m-3 relative text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}

        {/* Tooltip Arrow */}
        {showArrow&&<TooltipPrimitive.Arrow
        className={cn(
          "bg-primary absolute fill-primary z-50 size-2.5 rotate-45 rounded-[2px] translate-y-[-6px]",
          side === "top" &&
          (pointerPosition === "leading"
      ? "left-[10%] top-full"
      : pointerPosition === "trailing"
      ? "left-[80%] top-full"
      : "right-[50%] translate-x-[-50%] top-full"), // Middle Default
        side === "bottom" &&
          (pointerPosition === "leading"
      ? "left-[10%] bottom-full rotate-180"
      : pointerPosition === "trailing"
      ? "bottom-full rotate-180 right-[10%]"
      : "left-1/2 -translate-x-1/2 bottom-full rotate-180"),
       // Left positioning
       side === "left" && [
        pointerPosition === "leading" && "top-5 rotate-90",
        pointerPosition === "trailing" && "bottom-2 -rotate-90",
        pointerPosition === "middle" && "top-1/2 -rotate-90"
      ],
      // Right positioning
      side === "right" && [
        // "right-full translate-y-[-13px]",
        pointerPosition === "leading" && "top-[10%] right-[100%]",
        pointerPosition === "trailing" && "right-[100%] top-[50%]",
        pointerPosition === "middle" && "top-[50%] translate-x-[-50%]"
      ],
          arrowClassName
        )}
      />}
        {/* <span
          className={cn(
            "absolute text-primary", // Added relative sizing
            side === "top" &&
              (pointerPosition === "leading"
          ? "left-[10%] top-full"
          : pointerPosition === "trailing"
          ? "left-[80%] top-full"
          : "right-[50%] translate-x-[-50%] top-full"), // Middle Default
            side === "bottom" &&
              (pointerPosition === "leading"
          ? "left-[10%] bottom-full rotate-180"
          : pointerPosition === "trailing"
          ? "bottom-full rotate-180 right-[10%]"
          : "left-1/2 -translate-x-1/2 bottom-full rotate-180"),
           // Left positioning
           side === "left" && [
            "left-full -translate-y-1/2",
            pointerPosition === "leading" && "top-5 rotate-90",
            pointerPosition === "trailing" && "bottom-2 -rotate-90",
            pointerPosition === "middle" && "top-1/2 -rotate-90"
          ],
          // Right positioning
          side === "right" && [
            "right-full -translate-y-1/2",
            pointerPosition === "leading" && "top-2 rotate-90",
            pointerPosition === "trailing" && "bottom-2 -rotate-90",
            pointerPosition === "middle" && "top-1/2 rotate-90"
          ],

          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="8" viewBox="0 0 64 8" fill="none">
  <path d="M32 8L40 0L24 0L32 8Z" fill={"currentColor"}/>
</svg>
        </span> */}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
