import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "../ui/tooltip"

function TooltipComp({ btn,content ,className}: { 
    btn:React.ReactNode
    className:string;
    content:React.ReactNode
 }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {btn}
                </TooltipTrigger>
                {/* Dont forget to pass fill when passing bg color*/}
                <TooltipContent className={className||`bg-red-300 fill-red-300`}>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default TooltipComp
