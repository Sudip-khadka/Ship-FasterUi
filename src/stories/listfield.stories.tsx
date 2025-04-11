import {Avatar} from "@/components/ui/avatar/avatar";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { ListField } from "@/components/ui/listfield"
import { Meta, StoryObj } from "@storybook/react";
import { ChevronRight, Mail, MessageSquare, Phone, User } from "lucide-react";

const meta:Meta<typeof ListField> ={
  title: "Components/ListField",
  component: ListField,
  tags:["autodocs"],
  argTypes: {
    leftContent: { control: "text" },
    rightContent: { control: "text" },
    className: { control: "text" },
    label: { control: "text" },
    description: { control: "text" },
    contentAlign: {
      control: "radio",
      options: ["left", "center", "right"],
    },
    contentGap: {
      control: "radio",
      options: ["default", "tight", "loose"],
    },
    fullWidth: { control: "boolean" },
    variant: {
      control: "radio",
      options: ["default", "bordered", "card"],
    },
    size: {
      control: "radio",
      options: ["default", "sm", "md", "lg"],
    },
    asButton: { control: "boolean" },
    onClick: { action: "clicked" },
  },
}
export default meta;
type Story=StoryObj<typeof ListField>

export const Default:Story = {
args : {
    // Import listfield from shipfaster-ui
    className:"w-full justify-center",
    label:"Default Variant",
    description:"Simple background with hover effect",
    leftContent:<MessageSquare className="h-5 w-5" />,
    rightContent:<ChevronRight className="h-5 w-5 text-muted-foreground" />,
    variant:"default"
}}

export const Bordered:Story = {
args : {
    label:"Bordered Variant",
    description:"With border and hover effect",
    leftContent:<Mail className="h-8 w-8 text-muted-foreground" />,
    rightContent:<ChevronRight className="h-5 w-5 text-muted-foreground" />,
    variant:"bordered"
}}

export const Card:Story = {
args : {
    label:"Card Variant",
    description:"With shadow and card background",
    leftContent:<Phone className="h-8 w-8 " />,
    rightContent:<ChevronRight className="h-5 w-5 text-muted-foreground" />,
    variant:"card",
}}

export const AsButton:Story = {
args : {
  label: "Clickable ListField",
  description: "This ListField behaves like a button.",
  contentAlign: "left",
  contentGap: "default",
  variant: "default",
  size: "sm",
  asButton: true,
  onClick: () => alert("Clicked ListField"),
}}

export const CustomContentAlignment:Story = {args : {
    label:"Align Content",
    description:"Text aligned to",
    leftContent:<User className="h-5 w-5 text-secondary-900" />,
    rightContent:<ChevronRight className="h-5 w-5 text-muted-foreground" />,
    variant:"bordered",
    contentAlign:"left"
}}

export const CustomSize:Story = {args : {
    label:"Small Size",
    labelClassName:"text-lg",
    descriptionClassName:"text-md",
    description:"Compact size for dense lists",
    leftContent:<User className="h-7 w-7" />,
    rightContent:
      <Badge variant="secondary" className="px-4" size={"sm"} shape={"rounded"}>
        Small
      </Badge>,
    variant:"bordered",
    size:"sm"
}}

export const WithLeftAndRightContent:Story = {args : {
    label:"User Profile",
    description:"john.doe@example.com",
    leftContent:
      <Avatar
      type="initial"
      size="md"
      action="none"
      initials="JD"
      shape="circle"
      status="none">
      </Avatar>,
    rightContent:
      <Badge variant="secondary" size="md" shape={"circle"}>
        View
      </Badge>
    ,
    variant:"bordered"
}
}
export const NoDescription:Story ={args : {
  label: "No Description",
  description: "",
  contentAlign: "center",
  contentGap: "default",
  variant: "card",
  size: "sm",
  fullWidth: true,
}}

