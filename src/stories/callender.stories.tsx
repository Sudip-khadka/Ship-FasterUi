// stories/calendar.stories.tsx

import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "@/components/ui/calendar"

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["single", "range", "multiple"],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const SingleDatePicker: Story = {
  args: {
    mode: "single",
    selected: new Date(),
  },
}

export const RangeDatePicker: Story = {
  args: {
    mode: "range",
    selected: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 5)),
    },
  },
}

export const MultipleDatePicker: Story = {
  args: {
    mode: "multiple",
    selected: [new Date(), new Date(new Date().setDate(new Date().getDate() + 2))],
  },
}

export const TwoMonthsView: Story = {
  args: {
    mode: "single",
    numberOfMonths: 2,
    pagedNavigation: false,
    selected: new Date(),
  },
}
