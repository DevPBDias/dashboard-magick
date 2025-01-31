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
import { Dot, Edit, Plus, Save, Settings, Trash, X } from "lucide-react";
import { Switch } from "../ui/switch";
import { useModalContext } from "@/context/modal-provider";
import { useState } from "react";

interface MediaProps {
  media: string;
  status: string;
}

const ContainerSocialMedia = ({ media, status }: MediaProps) => {
  const { accountModal, setAccountModal } = useModalContext();
  const [showBtn, setShowBtn] = useState<boolean>();
  const [addSocial, setAddSocial] = useState<boolean>();

  return (
    <section className="flex flex-col justify-start items-center gap-4">
      {addSocial ? (
        <>
          <section className="flex flex-col 2xl:flex-row justify-center items-start gap-2 2xl:justify-between 2xl:items-center w-full">
            <h4>Accounts:</h4>
            <div className="flex flex-col 2xl:flex-row justify-center items-start gap-2 2xl:justify-between 2xl:items-center w-full">
              <div className="flex flex-row justify-start items-start gap-2 2xl:justify-between 2xl:items-center w-full">
                <Input
                  className="w-full lg:w-64"
                  type="text"
                  placeholder="Beautiful Name"
                />
                <Select>
                  <SelectTrigger className="w-full lg:w-[220px]">
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
              </div>
              <div className="flex flex-row justify-start items-center gap-4 w-full">
                <Switch />
                <Button
                  variant="outline"
                  className="dark:bg-muted/50 "
                  size="icon"
                  onClick={() => setAccountModal(!accountModal)}
                >
                  <Settings />
                </Button>
                {showBtn && (
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setShowBtn(!showBtn)}
                  >
                    <Trash />
                  </Button>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 2xl:items-center w-full">
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
            </div>
          </section>
          <section className="flex flex-row justify-start items-start gap-2 w-full 2xl:px-20">
            <Button variant="outline" type="button">
              <Plus />
            </Button>
            {showBtn && (
              <>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setShowBtn(!showBtn)}
                >
                  <X />
                  <p>Cancel</p>
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setShowBtn(!showBtn)}
                >
                  <Save />
                  <p>Save</p>
                </Button>
              </>
            )}
            {!showBtn && (
              <Button
                variant="outline"
                type="button"
                onClick={() => setShowBtn(!showBtn)}
              >
                <Edit />
                <p>Edit</p>
              </Button>
            )}
          </section>
        </>
      ) : (
        <section className="flex flex-row justify-start items-start gap-4 w-full">
          <h4>Accounts:</h4>
          <Button
            variant="outline"
            type="button"
            onClick={() => setAddSocial(!showBtn)}
          >
            <Plus />
          </Button>
        </section>
      )}
    </section>
  );
};

export default ContainerSocialMedia;
