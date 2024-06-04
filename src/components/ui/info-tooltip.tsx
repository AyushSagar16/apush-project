'use client'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react"
import { useState } from "react"
export default function InfoTooltip({information}:{information : string}) {
    const [open, setOpen] = useState(false);
    function handleOpenClose(){
        if(open){
            setOpen(false);
        }
        else{
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 5000);
        }
    }
    return (
        <>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild className="collapse lg:visible xl:visible 2xl:visible">
                    <InfoIcon size={24} />
                </TooltipTrigger>
                <TooltipContent className="max-w-[40vw] p-2">
                    <p className="max-w-64">{information}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        {open && <p className="max-w-64 absolute z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
            {information}
        </p>}
        <Button onClick={handleOpenClose} className="bg-transparent lg:collapse xl:collapse 2xl:collapse" variant={'ghost'}><InfoIcon size={24}/></Button>
        </>
    )
}
