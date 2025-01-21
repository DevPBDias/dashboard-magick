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
import { Input } from "@/components/ui/input";
import { Dot, Edit, Plus, Save, Settings, X } from "lucide-react";
import { Switch } from "../ui/switch";
import { useModalContext } from "@/context/modal-provider";

interface MediaProps {
  media: string;
  status: string;
}

const ContainerSocialMedia = ({ media, status }: MediaProps) => {
  const { accountModal, setAccountModal } = useModalContext();

  return (
    <section className="flex flex-col justify-start items-center gap-4">
      <section className="flex flex-row justify-start items-center gap-4">
        <h4>Accounts:</h4>
        <Input className="w-80" type="text" placeholder="Beautiful Name" />
        <Select>
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
        <Switch />
        <Button
          variant="outline"
          className="dark:bg-muted/50 "
          size="icon"
          onClick={() => setAccountModal(!accountModal)}
        >
          <Settings />
        </Button>
        <Button
          variant="outline"
          className="flex flex-row justify-start items-center gap-2 dark:bg-muted/50 hover:dark:bg-white/10"
        >
          <Dot />
          <p className="text-sm">{status}</p>
        </Button>
        <Button
          variant="default"
          className="w-fit px-4 py-2"
          size="icon"
          onClick={() => setAccountModal(!accountModal)}
        >
          Log in with {media}
        </Button>
      </section>
      <section className="flex flex-col justify-center items-start gap-2 w-full px-8">
        <Button variant="outline" type="button">
          <Plus />
        </Button>
        <div className="flex flex-row justify-center items-start gap-2">
          <Button variant="outline" type="button">
            <X />
            <p>Cancel</p>
          </Button>
          <Button variant="outline" type="button">
            <Edit />
            <p>Edit</p>
          </Button>
        </div>
      </section>
    </section>
  );
};

export default ContainerSocialMedia;
