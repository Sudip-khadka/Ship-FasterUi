import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import { Badge } from '../components/ui/badge';
import { ChevronLeft, ChevronRight, HelpCircleIcon } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "destructive", "warning", "secondary", "success"],
    },
    size: {
      control: "select",
      options: [ "sm", "md", "lg",],
    },
    disabled: {
        control: "boolean",
        defaultValue: false,
      },
    shape:{
        control:"select",
        options:["pill","rounded","circle","dot"]
    },
    style:{
        control:"select",
        options:["filled","accent","outlined"]
    },
    children: {
      control: "text",
      defaultValue: "Badge",
    },
    startIcon: {
      control: "select",
      options: ["","chevron-left", "help-circle"],
      mapping: {
        "chevron-left": <ChevronLeft />,
        "help-circle": <HelpCircleIcon />,
      },
    },
    endIcon: {
      control: "select",
      options: ["chevron-right", "help-circle"],
      mapping: {
        "chevron-right": <ChevronRight />,
        "help-circle": <HelpCircleIcon />,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: 'sm',
    children: "Badge",
    shape:"dot",
    startIcon: "chevron-left",
    endIcon: "chevron-right",
    style:"filled",
    disabled:false,
  },
};