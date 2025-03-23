import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "@/components/ui/slider"

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [30, 50],
    min: 0,
    max: 100,
    trackClassName: "",
    thumbClassName: "border-5 ",
    className: "h-[100px] w-[200px]",
    showTooltip: true,
    orientation: "horizontal",
    rangeClassName: "",
    variant:"range",
    showTicks: false,
    tickCount: 10,
    iconPosition:"center",
    marks:[
        { value: 0, label: "0%" },
        
        { value: 100, label: "100%" },
      ],
    startIcon:null,
    endIcon:null
  },
}
