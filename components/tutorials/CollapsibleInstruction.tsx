"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { File, Minus, Plus } from "lucide-react";
import { useState } from "react";

interface MediaProps {
  title: string;
  links: any;
}

const CollapsibleInstruction = ({ title, links }: MediaProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger className="w-full flex flex-row justify-start items-center p-2 gap-4 hover:underline hover:cursor-pointer">
        <div className="border dark:border-white/60 border-black/60">
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
        <p className="text-left font-semibold">
          {links.id}. {title}
        </p>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-10 py-1 w-full">
        {links.text.map((instruction: any, index: number) => (
          <div
            key={index}
            className="flex flex-row gap-2 justify-start items-center hover:underline hover:cursor-pointer"
          >
            <p className="text-sm">
              {links.id}.{index + 1}
            </p>
            <File size={14} />
            <p className="text-sm">{instruction}</p>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleInstruction;
