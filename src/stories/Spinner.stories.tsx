import Spinner from "@/components/ui/spinner";
import { Meta, StoryObj } from "@storybook/react";
import '../index.css'
const meta:Meta<typeof Spinner>={
    title:"UI/Spinner",
    component:Spinner,
    tags:["autodocs"],
    argTypes:{
        containerClass:{
            control:false
        }
    }
}
export default meta;
type Story=StoryObj<typeof Spinner>
export const SpinnerComp:Story={
    args:{
        containerClass:"",
        className:"text-primary h-[50px] w-[50px]",
        label:<p className="text-warning">Loading...</p>
    }
}
