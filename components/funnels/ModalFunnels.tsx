"use client";

import { useModalContext } from "@/context/modal-provider";
import { Button } from "@/components/ui/button";

const ModalFunnels = () => {
  const { callDeleteProject, setCallDeleteProject } = useModalContext();

  return (
    <section
      className={`${
        callDeleteProject ? "flex" : "hidden"
      } absolute z-10 top-1/3 left-1/3 w-fit p-8 flex-col gap-8 dark:bg-muted/50 rounded-md`}
    >
      <p>Do you really want to exclude this project?</p>
      <div className="flex w-full justify-end items-center gap-6">
        <Button
          variant="outline"
          type="button"
          className="hover:dark:bg-white/10"
          onClick={() => setCallDeleteProject(!callDeleteProject)}
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="hover:dark:bg-white/10 hover:dark:text-white"
          onClick={() => setCallDeleteProject(!callDeleteProject)}
        >
          Delete
        </Button>
      </div>
    </section>
  );
};

export default ModalFunnels;
