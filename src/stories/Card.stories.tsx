import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import cardComp from '@/components/internal/cardComp';
import { Button } from '@/components/ui/button';
import { ArrowBigDownIcon, ChevronDownIcon } from 'lucide-react';

const meta: Meta<typeof cardComp> = {
    title: "UI/Cards",
    component: cardComp,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        content: { control: 'text' },
        badge: { 
            control: 'object',
            defaultValue: { label: '', variant: 'success' },
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '{ label: string, variant: "success" | "warning" }' },
            },
        },
        cardFooter: { control: 'object' }
    }
}
export default meta;

type Story = StoryObj<typeof cardComp>

export const Card: Story = {
    args: {
        title: "List Name",
        description: "20th Feb",
        content: (
            <div className="flex flex-col">
                <p>Hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ab labore repellendus reprehenderit placeat esse fugiat, laborum totam ratione beatae voluptas cumque. Alias commodi maiores ad quibusdam atque nesciunt debitis?</p>
                <p>Guys</p>
                <p>Chai</p>
                <p>Pilow</p>
            </div>
        ),
        badge: {
            label: "Tag 1",
        },
        cardFooter: (
            <div className="btncontainer w-full">
                <Button variant="default" className="w-full">Validate File</Button>
            </div>
        )
    }
}

export const CardSecondary: Story = {
    args: {
        title: "List Name",
        description: "20th Feb",
        content: (
            <div className="flex flex-col">
                <p>Hello</p>
                <p>Guys</p>
                <p>Chai</p>
                <p>Pilow</p>
            </div>
        ),
        badge: {
            label: "Tag 2",
            variant: "warning"
        },
        cardFooter: (
            <div className="btncontainer w-full flex justify-evenly">
                <Button variant="secondary" className="w-fit" endIcon={<ChevronDownIcon />}>Download</Button>
                <Button variant="tertiary" className="w-fit" endIcon={<ArrowBigDownIcon className='-rotate-120' />}>View</Button>
            </div>
        )
    }
}
