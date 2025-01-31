"use client";

import { useModalContext } from "@/context/modal-provider";
import { Button } from "@/components/ui/button";

const ModalFunnels = () => {
  const { callDeleteProject, setCallDeleteProject } = useModalContext();

  return (
    <section
      className={`${
        callDeleteProject ? "flex" : "hidden"
      } absolute z-10 top-0 left-0 w-full h-screen dark:bg-muted/50`}
    >
      <div className="flex flex-col gap-8 bg-black rounded-md w-full m-auto p-8 md:w-3/4 lg:w-[500px]">
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
      </div>
    </section>
  );
};

export default ModalFunnels;
