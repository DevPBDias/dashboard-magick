import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";

interface ContentProps {
  labelName: string;
  inputValue: string;
}

const OfferContent = ({ labelName, inputValue }: ContentProps) => {
  return (
    <div className="flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center gap-3 w-full">
      <Label className="font-medium lg:w-[500px]">{labelName}:</Label>
      <div className="flex flex-row justify-start items-center w-full gap-3">
        <Input type="text" disabled value={inputValue} className="w-full" />
        <Button type="button" className="lg:ml-auto">
          <Copy size={14} />
        </Button>
      </div>
    </div>
  );
};

export default OfferContent;
