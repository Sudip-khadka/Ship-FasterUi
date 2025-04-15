// stories/progress.stories.tsx

import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "@/components/ui/progress/progress"

const meta: Meta<typeof Progress> = {
    title: "Components/Progress",
    component: Progress,
    tags: ["autodocs"],
    args: {
        value: 50,
        rootClassName: "bg-primary-300 h-2",
        indicatorClassName: "bg-primary",
    },
    argTypes: {
        value: {
            control: { type: "range", min: 0, max: 100 },
        },
        rootClassName: {
            control: { type: "text" },
        },
        indicatorClassName: {
            control: { type: "text" },
        },
    },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 60,
  },
}

export const LowProgress: Story = {
  args: {
    value: 10,
  },
}

export const HighProgress: Story = {
  args: {
    value: 90,
  },
}

export const CustomStyling: Story = {
  render: (args) => (
    <Progress
      {...args}
      rootClassName=""
      indicatorClassName=""
    />
  ),
  args: {
    value: 75,
  },
}
