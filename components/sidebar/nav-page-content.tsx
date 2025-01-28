"use client";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useModalContext } from "@/context/modal-provider";

const NavPageContent = () => {
  const { triggerLogo, setTriggerLogo } = useModalContext();

  return (
    <section className="flex items-center justify-between w-full px-4">
      <div
        className="flex justify-center items-center border-[1px] border-white/20 rounded-lg"
        onClick={() => setTriggerLogo(!triggerLogo)}
      >
        <SidebarTrigger />
      </div>
      <ModeToggle />
    </section>
  );
};

export default NavPageContent;
