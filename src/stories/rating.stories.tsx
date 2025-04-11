import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "@/components/ui/rating"
import { useState } from "react";

const meta: Meta<typeof Rating> = {
    title: "Components/Rating",
    component: Rating,
    tags:["autodocs"],
    argTypes: {
        value: { control: { type: "number", min: 0, max: 5, step: 0.5 } },
        max: { control: { type: "number", min: 1, max: 10 } },
        readonly: { control: "boolean" },
        size: { control: "radio", options: ["sm", "md", "lg", "xl"] },
        variant: { control: "radio", options: ["yellow", "neutral"] },
        starStyle: { control: "radio", options: ["filled", "outline"] },
        tooltipClassname: { control: "text" },
    },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3.5,
    max: 5,
    readonly: false,
    size: "lg",
    variant: "neutral",
    starStyle: "outline",
  },
};

export const Interactive: Story = {
    render: (args) => {
      const [rating, setRating] = useState(args.value);
  
      return (
        <div className="container w-fit">
            <Rating
          {...args}
          value={rating}
          onRatingChange={(newValue) => setRating(newValue)}
          tooltipClassname="bg-destructive-500 fill-destructive-500"
        />
        </div>
      );
    },
    args: {
      max: 5,
      readonly: false,
      size: "xl",
      variant: "neutral",
      starStyle: "outline",
      value: 5,
      showTooltip: true,
      tooltipClassname: ""
    },
  };

export const OutlineStyle: Story = {
  args: {
    value: 4,
    max: 5,
    readonly: true,
    size: "md",
    variant: "yellow",
    starStyle: "outline",
  },
};
