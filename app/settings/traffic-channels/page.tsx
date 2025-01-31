"use client";

import ContainerCollapsible from "@/components/channels/ContainerCollapsible";

const TrafficChannels = () => {
  return (
    <main className="bg-sidebar p-3 lg:p-8 h-fit flex flex-1 flex-col justify-start items-start gap-8 dark:bg-muted/50 border-t-[1px] border-white/10">
      <h4 className="font-bold text-lg">Traffic Channels</h4>
      <ContainerCollapsible />
    </main>
  );
};

export default TrafficChannels;
