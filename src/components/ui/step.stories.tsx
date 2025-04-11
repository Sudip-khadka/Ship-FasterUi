import type { Meta, StoryObj } from '@storybook/react';
import { Step } from "@/components/ui/stepper"
import { Check, Phone } from 'lucide-react';

const meta: Meta<typeof Step> = {
  title: 'Components/Step',
  component: Step,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: {
        type: 'select',
        options: ['active', 'inactive', 'completed', 'destructive', 'disabled'],
      },
    },
    direction: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    nodeType: {
      control: {
        type: 'radio',
        options: ['icon', 'number', 'dot'],
      },
    },
    stepperStyle: {
      control: {
        type: 'radio',
        options: ['lined', 'boxed', 'step'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Step>;

export const Default: Story = {
  args: {
    title: 'Step Title',
    description: 'Step description goes here',
    state: 'active',
    index: 1,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex gap-0">
        <Step title="Active" state="active" index={1} icon={<Phone/>} isFirstStep/>
        <Step title="Inactive" state="inactive" index={2} />
        <Step title="Completed" state="completed" index={3} />
        <Step title="Destructive" state="destructive" index={4} />
        <Step title="Disabled" state="disabled" index={5} isLastStep />
      </div>
      <div className="flex flex-col">
        <Step title="Active" state="active" index={1} direction="vertical" isFirstStep/>
        <Step title="Inactive" state="inactive" index={2} direction="vertical" />
        <Step title="Completed" state="completed" index={3} direction="vertical" isLastStep />
      </div>
    </div>
  ),
};

export const NodeTypes: Story = {
    render: () => (
      <div className="flex gap-4">
        <Step title="Number" nodeType="number" index={1} />
        <Step title="Icon" nodeType="icon" icon={<Check className="h-4 w-4" />} index={2} />
        <Step title="Dot" nodeType="dot" index={3} />
      </div>
    ),
  };
  
  export const WithContent: Story = {
    args: {
      title: 'Step with content',
      description: 'This step has additional content below',
      state: 'active',
      children: (
        <div className="p-4 bg-muted rounded-md">
          <p>Additional content can go here</p>
          <p>This could be form fields, instructions, etc.</p>
        </div>
      ),
    },
  };
  
  export const VerticalLayout: Story = {
    render: () => (
      <div className="flex flex-col gap-1">
        <Step 
          title="First Step" 
          description="This is the first step" 
          state="completed" 
          direction="vertical" 
          index={1} 
        />
        <Step 
          title="Current Step" 
          description="You are here" 
          state="active" 
          direction="vertical" 
          index={2} 
        />
        <Step 
          title="Next Step" 
          description="Coming up next" 
          state="inactive" 
          direction="vertical" 
          index={3} 
        />
      </div>
    ),
  };
  
  export const CustomIcon: Story = {
    args: {
      title: 'Custom Icon',
      description: 'Step with a custom icon',
      nodeType: 'icon',
      icon: <span className="text-lg">🌟</span>,
    },
  };