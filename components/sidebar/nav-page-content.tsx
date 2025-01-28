"use client";
import { ModeToggle } from "@/components/theme/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useModalContext } from "@/context/modal-provider";

const NavPageContent = () => {
  const pageName = "Dashboard"; // pega rota da pagina
  const { triggerLogo, setTriggerLogo } = useModalContext();

  return (
    <div className="flex items-center justify-between w-full px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger
          className="-ml-1"
          onClick={() => setTriggerLogo(!triggerLogo)}
        />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">{pageName}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ModeToggle />
    </div>
  );
};

export default NavPageContent;
