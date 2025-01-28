import { ChartDashboard } from "./ChartDashboard";
import ContainerHeaderInfo from "./ContainerHeaderInfo";
import ContainerMiddleInfo from "./ContainerMiddleInfo";
import { SelectTimezone } from "./SelectTimezone";

const PageContent = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 p-2 w-full">
      <div className="flex flex-col gap-4 w-full">
        <ContainerHeaderInfo />
        <ContainerMiddleInfo />
      </div>
      <section className="w-full flex flex-col justify-between items-start gap-4">
        <div className="flex flex-row justify-between items-center w-full">
          <h3 className="font-bold text-lg">Metrics</h3>
          <div className="flex flex-row justify-center items-center gap-2">
            <h4 className="text-base font-semibold">Timezone</h4>
            <SelectTimezone />
          </div>
        </div>
        <ChartDashboard />
      </section>
    </div>
  );
};

export default PageContent;
