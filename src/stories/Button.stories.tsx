import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight, HelpCircleIcon } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags:["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "tertiary", "secondary", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg", "icon"],
    },
    children: {
      control: "text",
      defaultValue: "Click me",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: 'sm',
    children: "Click Me",
    startIcon: "chevron-left",
    endIcon: "chevron-right",
  },
};