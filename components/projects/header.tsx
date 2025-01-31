"use client";
import { Settings } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useModalContext } from "@/context/modal-provider";
import { SelectTimezone } from "../main_content_dashboard/SelectTimezone";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

interface HeaderProjectsProps {
  projectName: string;
  btnGraphic: boolean;
  setBtn: any;
}

const HeaderProjects = ({
  projectName,
  btnGraphic,
  setBtn,
}: HeaderProjectsProps) => {
  const { callModal, setCallModal } = useModalContext();

  return (
    <header className="flex flex-col justify-start items-start gap-3 lg:flex-row lg:justify-between lg:items-center w-full rounded-md">
      <h3 className="w-full text-lg font-bold">{projectName}</h3>
      <div className="w-full flex flex-row justify-between lg:justify-end items-center gap-2 lg:gap-6">
        <div className="flex flex-row justify-center items-center gap-2">
          <Switch id="graphic-mode" onClick={() => setBtn(!btnGraphic)} />
          <Label htmlFor="graphic-mode">Show graphic</Label>
        </div>
        <SelectTimezone />
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCallModal(!callModal)}
        >
          <Settings />
        </Button>
      </div>
    </header>
  );
};

export default HeaderProjects;
