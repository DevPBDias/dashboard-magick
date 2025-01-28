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
    <div className="flex flex-row justify-between items-center gap-3 w-full">
      <Label className="font-semibold w-[500px]">{labelName}:</Label>
      <Input type="text" disabled value={inputValue} className="w-full" />
      <Button type="button" className="ml-auto">
        <Copy />
      </Button>
    </div>
  );
};

export default OfferContent;
