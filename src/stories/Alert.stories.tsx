import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert/alert";
import { Info, XIcon } from "lucide-react"; // ✅ Import icons
import "../index.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags:["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "destructive", "warning", "success", "secondary"],
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
    className: "",
    children: (
      <>
        <span className="w-8 h-8">
          <Info />
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
export const Secondary: Story = {
  args: {
    variant: "primary",
    style: "accent",
    className: "w-[500px] gap-2 flex flex-col",
    children: (
       <>
       <div className="header w-full flex justify-between text-secondary-600">
       <Badge size={"md"} variant={"primary"} style={"outlined"} shape={"circle"}>New Alert</Badge>
<XIcon  />
       </div>
       <div className="titles-container">

<AlertTitle>Alert line which displays the main function or reason of the alert.</AlertTitle>
<AlertDescription>Alert line which displays the main function or reason of the alert.</AlertDescription>
       </div>
      <div className="othercontent flex gap-3 ">
      <Button variant={"tertiary"} className="w-fit">Hello</Button>
      <Button className="w-fit">PrimaryBtn</Button>
     </div></>
    ),
  },
};
