"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"
import { Volume, Volume2 } from "lucide-react"

export type SliderVariant = "default" | "range" | "minmax"

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  trackClassName?: string
  rangeClassName?: string
  thumbClassName?: string
  showTicks?: boolean
  tickCount?: number
  tickClassName?: string
  marks?: { value: number; label?: string }[]
  markClassName?: string
  markLabelClassName?: string
  formatValue?: (value: number) => string
  showTooltip?: boolean
  tooltipClassName?: string
  variant?: SliderVariant
  showMinMaxLabels?: boolean
  minMaxLabelClassName?: string
  startIcon?:React.ReactNode
  endIcon?:React.ReactNode
  iconPosition?:"center"|"bottom"
containerClassName?:string
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {

      startIcon=<Volume/>,
      endIcon=<Volume2/>,
      className,
      containerClassName,
      trackClassName,
      iconPosition="center",
      rangeClassName,
      thumbClassName,
      showTicks = false,
      tickCount = 5,
      tickClassName,
      marks,
      markClassName,
      markLabelClassName,
      formatValue = (value) => value.toString(),
      showTooltip = false,
      tooltipClassName,
      defaultValue,
      value,
      min = 0,
      max = 100,
      step,
      orientation = "horizontal",
      variant = "default",
      showMinMaxLabels = false,
      minMaxLabelClassName,
      ...props
    },
    ref,
  ) => {
    const [hoveredThumbIndex, setHoveredThumbIndex] = React.useState<number | null>(null)
    const [localValue, setLocalValue] = React.useState<number[]>(
      Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min],
    )

    // Determine if this is a range slider based on values or variant
    const isRange = React.useMemo(() => {
      return variant === "range" || variant === "minmax" || localValue.length > 1
    }, [variant, localValue])

    React.useEffect(() => {
      if (Array.isArray(value)) {
        setLocalValue(value)
      }
    }, [value])

    // Ensure we have two values for range sliders
    React.useEffect(() => {
      if (isRange && localValue.length === 1) {
        setLocalValue([localValue[0], max])
      }
    }, [isRange, localValue, max])

    const handleValueChange = (newValue: number[]) => {
      setLocalValue(newValue)
    }

    const renderTicks = () => {
      if (!showTicks) return null
      if(marks) return null

      const ticks = []
      const stepSize = (max - min) / (tickCount - 1)

      for (let i = 0; i < tickCount; i++) {
        const tickValue = min + i * stepSize
        const position = `${((tickValue - min) / (max - min)) * 100}%`

        ticks.push(
          <div
            key={`tick-${i}`}
            className={cn(
              "absolute w-0.5 h-1.5 bg-muted-foreground/50 transform -translate-x-1/2",
              orientation === "vertical" && "w-1.5 h-0.5 -translate-y-1/2",
              tickClassName,
            )}
            style={{
              [orientation === "horizontal" ? "left" : "top"]: position,
            }}
          />,
        )
      }

      return ticks
    }

    const renderMarks = () => {
      if (!marks || marks.length === 0) return null

      return marks.map((mark, index) => {
        const position = `${((mark.value - min) / (max - min)) * 100}%`

        return (
          <div
            key={`mark-${index}`}
            className="absolute"
            style={{
              [orientation === "horizontal" ? "left" : "top"]: position,
              [orientation === "horizontal" ? "bottom" : "left"]: "-24px",
            }}
          >
           {showTicks&& <div className={cn("w-1 h-3 bg-primary/70", orientation === "vertical" && "w-3 h-1", markClassName)} />}
            {mark.label && (
              <div
                className={cn(
                  "text-xs text-muted-foreground mt-1 transform -translate-x-1/2",
                  orientation === "vertical" && "ml-3 mt-0 -translate-y-1/2",
                  markLabelClassName,
                )}
              >
                {mark.label}
              </div>
            )}
          </div>
        )
      })
    }

    // Create a custom track instead of using SliderPrimitive.Track
    const renderCustomTrack = () => {
      const rangePercent = localValue.map((val) => ((val - min) / (max - min)) * 100)

      return (
        <div
          className={cn(
            "absolute bg-gray-300 rounded-full",
            orientation === "horizontal"
              ? "h-2 w-full top-1/2 -translate-y-1/2"
              : "w-2 h-full left-1/2 -translate-x-1/2",
            variant === "range" && "bg-gray-200",
            variant === "minmax" && "bg-gray-100 border border-gray-300",
            trackClassName,
          )}
        >
          {/* Custom range indicator */}
          <div
            className={cn(
              "absolute bg-primary rounded-full",
              orientation === "horizontal" ? "h-full" : "w-full",
              variant === "range" && "bg-primary",
              variant === "minmax" && "bg-gradient-to-r from-primary to-primary-200",
              rangeClassName,
            )}
            style={
              localValue.length === 1
                ? {
                    [orientation === "horizontal" ? "width" : "height"]: `${rangePercent[0]}%`,
                    [orientation === "horizontal" ? "left" : "bottom"]: 0,
                  }
                : {
                    [orientation === "horizontal" ? "left" : "bottom"]: `${rangePercent[0]}%`,
                    [orientation === "horizontal" ? "width" : "height"]: `${rangePercent[1] - rangePercent[0]}%`,
                  }
            }
          />
        </div>
      )
    }

    const renderMinMaxLabels = () => {
      if (!showMinMaxLabels) return null

      return (
        <>
          <div
            className={cn(
              "absolute text-xs text-muted-foreground",
              orientation === "horizontal" ? "-bottom-6 left-0" : "-left-6 bottom-0",
              minMaxLabelClassName,
            )}
          >
            {formatValue(min)}
          </div>
          <div
            className={cn(
              "absolute text-xs text-muted-foreground",
              orientation === "horizontal" ? "-bottom-6 right-0" : "-left-6 top-0",
              minMaxLabelClassName,
            )}
          >
            {formatValue(max)}
          </div>
        </>
      )
    }

    return (
      <div className={`container w-fit flex gap-2 items-center justify-center ${iconPosition==="bottom"|| orientation==="vertical"?"flex-col":""} ${containerClassName}`}>
        {(iconPosition==="center")&&startIcon}
        <div
        className={cn(
          "relative",
          orientation === "horizontal" ? "w-full h-10" : "h-full w-10",
          showMinMaxLabels && orientation === "horizontal" && "mb-6",
          showMinMaxLabels && orientation === "vertical" && "ml-6",
          className,
        )}
      >
        {/* Custom track rendered outside of SliderPrimitive.Root */}
        {renderCustomTrack()}
        {renderMinMaxLabels()}

        <SliderPrimitive.Root
          ref={ref}
          data-slot="slider"
          defaultValue={defaultValue}
          value={value}
          onValueChange={handleValueChange}
          min={min}
          max={max}
          step={step}
          orientation={orientation}
          className={cn(
            "absolute inset-0 flex touch-none items-center select-none data-[disabled]:opacity-50",
            orientation === "vertical" && "flex-col",
          )}
          {...props}
        >
          {/* We're not using SliderPrimitive.Track or SliderPrimitive.Range here */}
          {/* Instead we're using our custom track rendered above */}

          {showTicks && (
            <div
              className={cn(
                "absolute",
                orientation === "horizontal" ? "left-0 right-0 top-1/2 mt-5" : "bottom-0 top-0 left-1/2 ml-5",
              )}
            >
              {renderTicks()}
            </div>
          )}

          {renderMarks()}

          {localValue.map((val, index) => (
            <React.Fragment key={index}>
              <SliderPrimitive.Thumb
                data-slot="slider-thumb"
                className={cn(
                  "border-primary bg-background ring-ring/50 block size-5 shrink-0 rounded-full border-2 shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 z-10",
                  variant === "range" && index === 0 && "border-primary",
                  variant === "range" && index === 1 && "border-primary",
                  variant === "minmax" && index === 0 && "border-primary",
                  variant === "minmax" && index === 1 && "border-primary",
                  thumbClassName,
                )}
                onMouseEnter={() => setHoveredThumbIndex(index)}
                onMouseLeave={() => setHoveredThumbIndex(null)}
                onTouchStart={() => setHoveredThumbIndex(index)}
                onTouchEnd={() => setHoveredThumbIndex(null)}
              />

              {showTooltip && hoveredThumbIndex === index && (
                <div
                  className={cn(
                    "absolute px-2 py-1 text-xs rounded bg-primary text-primary-foreground z-20",
                    orientation === "horizontal" ? "-mt-15 transform -translate-x-1/2" : "transform -translate-y-1/2",
                    variant === "range" && "bg-primary",
                    variant === "minmax" && index === 0 && "bg-primary",
                    variant === "minmax" && index === 1 && "bg-primary border-primary",
                    tooltipClassName,
                  )}
                  style={
                    orientation === "horizontal"
                      ? {
                          left: `${((val - min) / (max - min)) * 100}%`,
                        }
                      : {
                          bottom: `${((val - min) / (max - min)) * 100}%`,
                          left: "-24px",
                        }
                  }
                >
                  {formatValue(val)}
                </div>
              )}
            </React.Fragment>
          ))}
        </SliderPrimitive.Root>
      </div>
      {iconPosition==="center"&&endIcon}
      {iconPosition==="bottom"&& orientation==="horizontal" &&
      <div className="iconscontainer w-full flex justify-between items-center">
        {startIcon}
        {endIcon}
      </div>
      }
      </div>
    )
  },
)

Slider.displayName = "Slider"

export { Slider }

