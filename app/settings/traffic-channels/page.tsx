"use client";

import ContainerCollapsible from "@/components/channels/ContainerCollapsible";

const TrafficChannels = () => {
  return (
    <main className="bg-sidebar m-4 p-4 rounded-md h-full flex flex-col justify-start items-start gap-8 dark:bg-muted/50">
      <h4>Traffic Channels</h4>
      <ContainerCollapsible />
    </main>
  );
};

export default TrafficChannels;
