"use client";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useModalContext } from "@/context/modal-provider";
import { Button } from "../ui/button";

const NavPageContent = () => {
  const { triggerLogo, setTriggerLogo } = useModalContext();

  return (
    <div className="flex items-center justify-between w-full px-4">
      <Button
        variant="outline"
        size="icon"
        className="flex justify-center items-center"
      >
        <SidebarTrigger onClick={() => setTriggerLogo(!triggerLogo)} />
      </Button>
      <ModeToggle />
    </div>
  );
};

export default NavPageContent;
