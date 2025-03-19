import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Code, Info } from "lucide-react"; // ✅ Import icons
import '../index.css'
import { Button } from "@/components/ui/button";
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "destructive", "warning", "success","secondary"],
      description: "Choose the type of alert",
    },
    style: {
      control: "radio",
      options: ["accent", "filled"],
      description: "Choose between accent and filled styles",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    variant: "primary",
    style: "accent",
    className:"flex items-center h-15",
    children: (
      <>
        <span className="w-8 h-8">
        <Info  />
      </span>
        <span className="flex flex-col gap-1">
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is a primary alert with accent style.
        </AlertDescription>
        </span>
        
      </>
    ),
  },
};