"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Plus, Save, Settings, X } from "lucide-react";
import { Switch } from "../ui/switch";
import { useOfferSourceContext } from "@/context/offer-provider";

const SavedInputs = () => {
  const { hideEdit, isDisabled, HandleSelect } = useOfferSourceContext();

  return (
    <section className="flex flex-col justify-center items-start gap-2 w-full">
      <div className="flex flex-row justify-start items-center gap-2 w-full">
        <Select disabled={isDisabled}>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select project" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Project 1">Project 1</SelectItem>
              <SelectItem value="Project 2">Project 2</SelectItem>
              <SelectItem value="Project 3">Project 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select disabled={isDisabled}>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select project" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="BuyGoods">BuyGoods</SelectItem>
              <SelectItem value="ClickBank">ClickBank</SelectItem>
              <SelectItem value="Digistore24">Digistore24</SelectItem>
              <SelectItem value="Ticto">Ticto</SelectItem>
              <SelectItem value="Hotmart">Hotmart</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline" type="button">
          <Settings />
        </Button>
        <Switch />
      </div>
      <div>
        <Button variant="outline" type="button">
          <Plus />
        </Button>
        {!hideEdit && (
          <Button variant="outline" type="button" onClick={HandleSelect}>
            <Edit />
            <p>Edit</p>
          </Button>
        )}
        {hideEdit && (
          <>
            <Button variant="outline" type="button" onClick={HandleSelect}>
              <X />
              <p>Cancel</p>
            </Button>
            <Button variant="outline" type="button" onClick={HandleSelect}>
              <Save />
              <p>Save</p>
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default SavedInputs;
