import { AppSidebar } from "@/components/sidebar/app-sidebar";
import NavPageContent from "@/components/sidebar/nav-page-content";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const LayoutSidebar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-sidebar dark:bg-muted/50 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <NavPageContent />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default LayoutSidebar;
