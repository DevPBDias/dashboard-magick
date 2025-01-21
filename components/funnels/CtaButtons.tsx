import { Plus, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaButtons = () => {
  return (
    <section className="flex flex-col justify-center items-start gap-2">
      <Button variant="outline" type="button">
        <Plus />
      </Button>
      <div className="flex flex-row justify-center items-start gap-2">
        <Button variant="outline" type="button">
          <X />
          <p>Cancel</p>
        </Button>
        <Button type="button">
          <Save />
          <p>Save</p>
        </Button>
      </div>
    </section>
  );
};

export default CtaButtons;
