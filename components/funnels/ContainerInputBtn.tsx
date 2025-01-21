"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModalContext } from "@/context/modal-provider";
import { Edit, Plus, Save, Trash } from "lucide-react";
import { useState } from "react";

const ContainerInputBtn = ({
  labelName,
  placeholder,
  editName,
}: {
  labelName: string;
  placeholder: string;
  editName: string;
}) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { callDeleteProject, setCallDeleteProject } = useModalContext();

  return (
    <div className="flex w-full items-center space-x-2">
      <h5>{labelName}</h5>
      <Input className="w-64" type="text" placeholder={placeholder} />
      <Button type="button" onClick={() => setShowInput(!showInput)}>
        <Plus />
      </Button>
      <Button
        variant="outline"
        type="button"
        onClick={() => setShowInput(!showInput)}
      >
        <Edit />
      </Button>
      <Button
        type="button"
        variant="outline"
        className={`${showInput ? "hidden" : "flex"} `}
        onClick={() => setCallDeleteProject(!callDeleteProject)}
      >
        <Trash />
      </Button>
      {showInput ? (
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input className="w-64" type="text" placeholder={editName} />
          <Button type="button" onClick={() => setShowInput(!showInput)}>
            <Save />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ContainerInputBtn;
