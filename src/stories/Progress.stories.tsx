import ProgressBarComponent from "@/components/internal/ProgressBar";
import { Meta, StoryObj } from "@storybook/react";
import { TvIcon } from "lucide-react";

const meta: Meta<typeof ProgressBarComponent> = {
    title: "UI/ProgressBar",
    component: ProgressBarComponent,
    tags:["autodocs"],
}
export default meta;
type Story = StoryObj<typeof ProgressBarComponent>
export const ProgressBarStory: Story = {
    args: {
        label:"Progress Bar Label",
        className:"w-[500px] bg-primary-50 rounded-xl p-2",
        description:"Description Goes Here",
        icon:(<TvIcon/>),
        rootClassName:"h-[15px]",
        progress:90,
        indicatorClassName:""
    }
}