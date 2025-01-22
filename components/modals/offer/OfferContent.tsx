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
    <div className="flex flex-row w-full justify-between items-center gap-2">
      <Label className="font-semibold">{labelName}:</Label>
      <Input type="text" disabled value={inputValue} className="w-full" />
      <Button type="button">
        <Copy />
      </Button>
    </div>
  );
};

export default OfferContent;
