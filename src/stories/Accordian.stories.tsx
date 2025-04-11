import { Meta, StoryObj } from "@storybook/react"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, StarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["rounded", "outline", "filled"],
    },
    type: {
      control: { type: "radio" },
      options: ["single", "multiple"],
    },
  },
  args: {
    variant: "rounded",
    type: "single",
    collapsible: true,
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

const AccordionExample = ({ variant = "rounded", ...props }: any) => (
  <Accordion {...props} variant={variant}>
    <AccordionItem value="item-1" variant={variant}>
      <AccordionTrigger variant={variant}>
        <div className="flex items-center gap-4 w-full">
        <p>What is your return policy?</p>
        <Badge style={"outlined"} variant={"primary"} endIcon={<StarIcon size={12}/>}>New</Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent variant={variant} className="items-center">
        <div className="content w-full">
          <MoreHorizontal/>
          <p>You can return any item within 30 days of purchase. </p>
        
          <p>Please ensure it is in original condition.</p>
        </div>
          <Button>View More</Button>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" variant={variant}>
      <AccordionTrigger variant={variant}>Do you offer technical support?</AccordionTrigger>
      <AccordionContent variant={variant}>
        Yes, we offer 24/7 technical support via chat and email. Reach out anytime!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" variant={variant}>
      <AccordionTrigger variant={variant}>Can I track my order?</AccordionTrigger>
      <AccordionContent variant={variant}>
        Absolutely! Once your order is shipped, you will receive a tracking number via email.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const Rounded: Story = {
  args: {
    variant: "rounded",
    type: "single",
    collapsible: true,
  },
  render: (args) => <AccordionExample {...args} />,
}

export const Outline: Story = {
  args: {
    variant: "rounded",
    type: "single",
    collapsible: true,
  },
  render: (args) => <AccordionExample {...args} />,
}

export const Filled: Story = {
  args: {
    variant: "filled",
    type: "single",
    collapsible: true,
  },
  render: (args) => <AccordionExample {...args} />,
}
