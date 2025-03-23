import tooltipComp from '@/components/internal/tooltipComp';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "@/components/ui/button"; // Ensure correct import
import { Plus, ChevronRight } from "lucide-react"; // Example icons

const meta: Meta<typeof tooltipComp> = {
    title: "Components/Tooltip",
    component: tooltipComp,
    tags:["autodocs"],
    argTypes: {
        btn: {
            control: false,
            description: 'Button component to be wrapped inside TooltipTrigger',
        },
        content: {
            control: false,
            description: 'Tooltip content (supports HTML/JSX)',
        },
        className: {
            control: 'text',
            description: 'CSS class for TooltipContent',
        },
    },
};

export default meta;

type Story = StoryObj<typeof tooltipComp>;


export const IconButtonTooltip: Story = {
    args: {
        btn: (
            <Button variant="secondary" startIcon={<Plus />} endIcon={<ChevronRight />}>
                Add Item
            </Button>
        ),
        content: (
            <div className="text-white p-2">
                <h1 className="text-lg font-bold">Tooltip Title</h1>
                <p className="text-sm">This is a tooltip with <strong>HTML content</strong>.</p>
            </div>
        ),
        className: 'bg-amber-500 fill-amber-500',
    },
};
