"use client";

import { ChartDashboard } from "@/components/main_content_dashboard/ChartDashboard";
import ContainerHeaderInfo from "@/components/main_content_dashboard/ContainerHeaderInfo";
import ContainerMiddleInfo from "@/components/main_content_dashboard/ContainerMiddleInfo";
import { SettingsProjectModal } from "@/components/modals/projects";
import HeaderProjects from "@/components/projects/header";
import { DataTableDemo } from "@/components/projects/Table";
import UtmSelects from "@/components/projects/UtmSelects";
import { useState } from "react";

const ProjectPage = () => {
  const [showGraphic, setShowGraphic] = useState(false);

  return (
    <main className="relative w-full p-8 dark:bg-muted/50 flex flex-1 flex-col gap-8">
      <SettingsProjectModal />
      <HeaderProjects
        projectName="My projects"
        btnGraphic={showGraphic}
        setBtn={setShowGraphic}
      />
      <ContainerHeaderInfo />
      <ContainerMiddleInfo />
      <UtmSelects />
      {showGraphic && <ChartDashboard />}
      <DataTableDemo />
    </main>
  );
};

export default ProjectPage;
