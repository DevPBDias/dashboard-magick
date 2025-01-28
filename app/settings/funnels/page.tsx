import ContainerInputBtn from "@/components/funnels/ContainerInputBtn";
import ContainerInputAction from "@/components/funnels/ContainerInputAction";
import ModalFunnels from "@/components/funnels/ModalFunnels";
import CtaButtons from "@/components/funnels/CtaButtons";

const selectOptions = [
  { value: "low", label: "Low Priority" },
  { value: "medium", label: "Medium Priority" },
  { value: "high", label: "High Priority" },
];

const Funnels = () => {
  return (
    <main className="bg-sidebar p-8 flex-1 flex flex-col justify-start items-start gap-8 dark:bg-muted/50 border-t-[1px] border-white/10">
      <ModalFunnels />
      <h4>Funnels</h4>
      <section className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col justify-start items-start gap-8">
          <section className="flex flex-col justify-center items-end gap-8 w-full">
            <ContainerInputBtn
              labelName="Project:"
              placeholder="My project"
              editName="ProjectName"
              data={selectOptions}
            />
            <ContainerInputBtn
              labelName="Funnel:"
              placeholder="My first funnel"
              editName="Funnel Name"
              data={selectOptions}
            />
            <ContainerInputBtn
              labelName="Campaign:"
              placeholder="My first Campaign"
              editName="Campaign Name"
              data={selectOptions}
            />
          </section>
          <section className="flex flex-row justify-center items-start gap-2">
            <h4>Actions:</h4>
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              <ContainerInputAction />
              <ContainerInputAction />
              <ContainerInputAction />
              <ContainerInputAction />
            </div>
          </section>
          <CtaButtons />
        </div>
      </section>
    </main>
  );
};

export default Funnels;
