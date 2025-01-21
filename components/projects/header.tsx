"use client";
import { Settings } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useModalContext } from "@/context/modal-provider";

const HeaderProjects = ({ projectName }: { projectName: string }) => {
  const { callModal, setCallModal } = useModalContext();

  return (
    <header className="flex flex-row justify-between items-center w-full p-4 rounded-md bg-muted/50">
      <h3>{projectName}</h3>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCallModal(!callModal)}
      >
        <Settings />
      </Button>
    </header>
  );
};

export default HeaderProjects;
