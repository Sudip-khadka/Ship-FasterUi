import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import DialogComponent, { DialogComponentProps } from "@/components/internal/dialogComp";
import { ChevronLeft, HelpCircleIcon } from "lucide-react";


const meta: Meta<typeof DialogComponent> = {
    title: "UI/Dialog",
    component: DialogComponent,
    tags:["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["slot", "media", "default","defaultLeft"],
        },
        alignment: {
            control: { type: "select" },
            options: ["horizontal", "vertical"],
        },
        triggerBtn: {
            control: { type: "text" },
        },
        innerContent: {
            control: { type: "text" },
        },
        icon: {
            control: "select",
            options: ["logo", "chevron-left", "help-circle"],
            mapping: {
                "logo": <IconLogo />,
                "chevron-left": <ChevronLeft />,
                "help-circle": <HelpCircleIcon />,
            },
        },
        title: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" },
        },
        primaryBtn: {
            control: { type: "text" },
        },
        secondaryBtn: {
            control: { type: "text" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof DialogComponent>;
const defaultArgs: DialogComponentProps = {
    variant: "default",
    alignment: "horizontal",
    triggerBtn: "Open Dialog",
    icon: <IconLogo />,
    image: "https://media.istockphoto.com/id/1557118048/photo/a-concept-that-expresses-the-hyper-connected-society-of-modern-society-by-connecting-people.jpg?s=1024x1024&w=is&k=20&c=8f8F0FEig-UIwhFFl4uEW5RUpINOlw5rd-qols04UF8=",
    title: "Default Title",
    description: "Default Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ad est maxime possimus voluptatibus, voluptate odit corporis ipsam dolor qui pariatur quisquam dolores quo dolorem! Id tenetur incidunt provident quaerat.",
    primaryBtn: "Primary Action",
    secondaryBtn: "Secondary Action",
    innerContent: <p className="text-center">Pass Your Component Like Forms...</p>,
    primaryButtonOnClick: () => {
        alert("Primary button clicked");
    },
    secondaryButtonOnClick: () => {
        alert("Secondary button clicked");
    }
};
export const Default: Story = {
  args: defaultArgs, // Use args instead of render
};
export function IconLogo(){
    return(
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-box text-primary-500"
      viewBox="0 0 16 16"
    >
      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
    </svg>
    )
}