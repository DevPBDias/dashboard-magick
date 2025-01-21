import { DatePickerDashboard } from "./DatePickerDashboard";
import { ChartDashboard } from "./ChartDashboard";
import ContainerHeaderInfo from "./ContainerHeaderInfo";
import ContainerMiddleInfo from "./ContainerMiddleInfo";
import { SelectDemo } from "./SelectDemo";
import { CalendarDashboard } from "./CalendarDashboard";

const PageContent = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 p-2 w-full">
      <div className="flex flex-col gap-4 w-full">
        <ContainerHeaderInfo />
        <ContainerMiddleInfo />
      </div>
      <section className="w-full flex flex-row gap-4 justify-start items-end">
        <div className="flex flex-col justify-center items-start gap-2">
          <h4 className="text-base font-semibold">Projects</h4>
          <SelectDemo />
        </div>
        <DatePickerDashboard />
      </section>
      <section className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2 pl-2 justify-center items-start w-1/4">
          <h3 className="font-bold text-lg">Month summary</h3>
          <span className="font-light text-xs text-gray-400">
            Daily revenue variation per month
          </span>
          <CalendarDashboard />
        </div>
        <div className="flex flex-col justify-center items-start gap-4 w-3/4">
          <h3 className="font-bold text-lg">Metrics</h3>
          <ChartDashboard />
        </div>
      </section>
    </div>
  );
};

export default PageContent;
