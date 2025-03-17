import Spinner from "@/components/ui/spinner";
import { Meta, StoryObj } from "@storybook/react";
import '../index.css'
const meta:Meta<typeof Spinner>={
    title:"UI/Spinner",
    component:Spinner,
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
        className:"text-success h-[50px] w-[50px]",
        label:<p>Loading...</p>
    }
}
