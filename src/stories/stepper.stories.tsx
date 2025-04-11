import { Meta, StoryObj } from "@storybook/react";
import { Stepper, Step } from "@/components/ui/stepper"
import { Check, X } from "lucide-react";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    style: {
      control: "radio",
      options: ["lined", "boxed", "step"],
    },
    nodeType: {
      control: "radio",
      options: ["icon", "number", "dot"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const HorizontalLined: Story = {
  args: {
    style: "lined",
    nodeType: "number",
    direction:"vertical",
    children: (
      <>
        <Step title="Step 1" description="Description here" state="completed" 
    direction= "vertical" />
        <Step title="Step 2" description="Current step" state="active"
        direction= "vertical" />
        <Step title="Step 3" description="Upcoming step" state="inactive"
        direction= "vertical" isLastStep/>
      </>
    ),
  },
};

export const CustomIcon: Story = {
  args: {
    direction: "vertical",
    style: "boxed",
    nodeType: "icon",
    children: (
      <>
        <Step title="Step 1" description="Done" state="completed" icon={<Check />} nodeType={"icon"} />
        <Step title="Step 2" description="In progress" state="active" icon={<Check />} nodeType={"icon"}/>
        <Step title="Step 3" description="Pending" state="inactive" icon={<Check />} nodeType={"icon"} isLastStep/>
      </>
    ),
  },
};

export const HorizontalDots: Story = {
  args: {
    direction: "horizontal",
    style: "step",
    nodeType: "dot",
    children: (
      <>
        <Step title="Step A" state="completed" />
        <Step title="Step B" state="active" />
        <Step title="Step C" state="inactive" />
      </>
    ),
  },
};

export const WithDestructiveState: Story = {
  args: {
    direction: "horizontal",
    style: "lined",
    nodeType: "icon",
    children: (
      <>
        <Step title="Step 1" state="completed" icon={<Check />} />
        <Step title="Step 2" state="destructive" icon={<X />} description="Error occurred" />
        <Step title="Step 3" state="inactive" />
      </>
    ),
  },
};
