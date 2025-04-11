"use client"

import React from "react"
import { Check, DotIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type StepState = "active" | "inactive" | "completed" | "destructive" | "disabled"
export type StepperDirection = "horizontal" | "vertical"
export type StepperStyle = "lined" | "boxed" | "step"
export type StepNodeType = "icon" | "number" | "dot"

export interface StepProps {
  title: string
  description?: string
  state?: StepState
  icon?: React.ReactNode
  children?: React.ReactNode
  isLastStep?: boolean
  isFirstStep?: boolean
  stepperStyle?: StepperStyle
  direction?: StepperDirection
  nodeType?: StepNodeType
  index?: number
}

export interface StepperProps {
  direction?: StepperDirection
  style?: StepperStyle
  nodeType?: StepNodeType
  children: React.ReactNode
  className?: string
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  (
    {
      title,
      description,
      state = "inactive",
      icon,
      children,
      isLastStep = false,
      isFirstStep = false,
      stepperStyle = "lined",
      direction = "horizontal",
      nodeType = "number",
      index = 1,
    },
    ref,
  ) => {
    const nodeBackgroundColor = {
      active: "bg-transparent text-primary border-2 border-primary ring-3 ring-primary/20",
      inactive: "bg-muted text-muted-foreground",
      completed: "bg-primary text-primary-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      disabled: "bg-muted text-muted-foreground opacity-50",
    }

    const boxBackgroundColor = {
      active: "bg-primary-50 border-primary-100",
      inactive: "bg-muted",
      completed: "bg-primary-50 border-primary-100",
      destructive: "bg-destructive-50 border-destructive-100",
      disabled: "bg-muted opacity-50",
    }

    const lineColor = {
      active: "bg-primary",
      inactive: "bg-muted",
      completed: "bg-primary",
      destructive: "bg-destructive",
      disabled: "bg-muted opacity-50",
    }

    const textColor = {
      active: "text-foreground",
      inactive: "text-muted-foreground",
      completed: "text-foreground",
      destructive: "text-destructive",
      disabled: "text-muted-foreground opacity-50",
    }

    const renderNode = () => {
      const baseNodeStyles = cn(
        "flex items-center h-8 w-8 justify-center shrink-0 transition-all duration-300",
        nodeBackgroundColor[state],
        {
          "rounded-full": true,
          "border-2": stepperStyle === "boxed",
          "z-[100]": true, // Ensure node appears above connectors
        },
      )

      if (nodeType === "icon") {
        return <div className={baseNodeStyles}>{icon || <Check className="h-4 w-4" />}</div>
      } else if (nodeType === "dot") {
        return (
          <div className={baseNodeStyles}>
            <DotIcon className="h-5 w-5" />
          </div>
        )
      } else {
        return <div className={baseNodeStyles}>{index}</div>
      }
    }

    const renderConnectors = () => {
      return (
        <>
          {/* Before connector - hidden for first step */}
          {!isFirstStep && (
            <div
              className={cn("transition-all duration-300", lineColor[state], {
                "absolute left-4 top-0 bottom-1/2 w-0.5": direction === "vertical",
                "absolute top-[50%] h-0.5 left-0 right-1/2": direction === "horizontal" && stepperStyle === "boxed",
                "h-0.5 flex-1": direction === "horizontal" && stepperStyle !== "boxed",
              })}
            />
          )}

          {/* After connector - hidden for last step */}
          {!isLastStep && (
            <div
              className={cn("transition-all duration-300", lineColor[state], {
                "absolute left-4 top-8 bottom-0 w-0.5 h-full": direction === "vertical",
                "absolute top-[50%] h-0.5 left-1/2 right-0": direction === "horizontal" && stepperStyle === "boxed",
                "h-0.5 flex-1": direction === "horizontal" && stepperStyle !== "boxed",
              })}
            />
          )}
        </>
      )
    }

    const renderContent = () => {
      const content = (
        <div
          className={cn("flex flex-col transition-all duration-300", {
            "mt-2": direction === "horizontal" && stepperStyle !== "step",
            "ml-3": direction === "vertical",
            "text-center": stepperStyle !== "boxed" || direction === "vertical",
          })}
        >
          <h3 className={cn("text-sm font-medium", textColor[state])}>{title}</h3>
          {description && (
            <p className={cn("text-xs", textColor[state], { "opacity-70": state !== "active" })}>{description}</p>
          )}
          {children && <div className="mt-2">{children}</div>}
        </div>
      )

      if (stepperStyle === "boxed") {
        return (
          <div
            className={cn(
              "p-4 rounded-lg border flex flex-col items-center transition-all duration-300",
              boxBackgroundColor[state],
              textColor[state],
              {
                "border-2": state === "active",
                "mt-3": direction === "horizontal",
              },
            )}
          >
            {direction === "vertical" && renderNode()}
            {content}
          </div>
        )
      }
      return content
    }

    return direction === "horizontal" ? (
      <div
        ref={ref}
        className={cn("flex flex-col flex-1", {
          "flex-1": !isLastStep && !isFirstStep,
          "items-start": !isFirstStep && stepperStyle === "boxed",
          "items-center": stepperStyle !== "boxed",
        })}
      >
        <div className="flex items-center w-full relative">
          {stepperStyle === "boxed" ? (
            <>
              {renderConnectors()}
              <div className="relative z-10 flex justify-center w-full">{renderNode()}</div>
            </>
          ) : stepperStyle === "step" ? (
            <>
              {!isFirstStep && <div className={cn("h-0.5 flex-1 transition-all duration-300", lineColor[state])} />}
              {!isLastStep && <div className={cn("h-0.5 flex-1 transition-all duration-300", lineColor[state])} />}
            </>
          ) : (
            <>
              {renderConnectors()}
              {renderNode()}
            </>
          )}
        </div>
        {stepperStyle === "step" && <div className="w-full flex justify-center mt-2">{renderNode()}</div>}
        {renderContent()}
      </div>
    ) : (
      <div
        ref={ref}
        className={cn("flex relative items-start", {
          "pb-6": !isLastStep && !isFirstStep,
          "min-h-[60px]": !isLastStep,
        })}
      >
        <div className="flex flex-col items-start relative">
          {renderConnectors()}
          {stepperStyle !== "boxed" && renderNode()}
        </div>
        {renderContent()}
      </div>
    )
  },
)
Step.displayName = "Step"

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ direction = "horizontal", style = "lined", nodeType = "number", children, className }, ref) => {
    const steps = React.Children.toArray(children)
    const enhancedSteps = steps.map((step, index) => {
      if (!React.isValidElement<StepProps>(step)) return step
      return React.cloneElement(step, {
        isLastStep: index === steps.length - 1,
        isFirstStep: index === 0,
        stepperStyle: style,
        direction,
        nodeType,
        index: index + 1,
      })
    })
    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          {
            flex: direction === "horizontal",
            "space-y-0": direction === "vertical",
          },
          className,
        )}
      >
        {enhancedSteps}
      </div>
    )
  },
)
Stepper.displayName = "Stepper"

export { Stepper, Step }

