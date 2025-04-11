// stories/Card.stories.tsx

import type { Meta, StoryObj } from "@storybook/react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const BasicCard: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>This is a simple card without any actions.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is some basic content inside the card.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Footer content</p>
      </CardFooter>
    </Card>
  ),
}

export const CardWithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>Includes a top-right action element.</CardDescription>
        <CardAction>
          <button className="text-blue-600 text-sm hover:underline">Edit</button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This card showcases how to use an action slot.</p>
      </CardContent>
    </Card>
  ),
}

export const CardOnlyHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Title Only</CardTitle>
      </CardHeader>
    </Card>
  ),
}

export const CardOnlyContent: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>This card only has content.</p>
      </CardContent>
    </Card>
  ),
}

export const FullCardExample: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Full Card</CardTitle>
        <CardDescription>This card has all the sections.</CardDescription>
        <CardAction>
          <button className="text-sm font-medium text-primary hover:underline">Settings</button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Last updated 2 hours ago</p>
      </CardFooter>
    </Card>
  ),
}
