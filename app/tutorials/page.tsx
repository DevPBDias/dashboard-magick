import ContainerInstruction from "@/components/tutorials/ContainerInstruction";
import ContentInstruction from "@/components/tutorials/ContentInstruction";

const TutorialPage = () => {
  return (
    <main className="bg-sidebar w-full p-3 lg:p-8 flex flex-1 flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8 dark:bg-muted/50 border-t-[1px] border-white/10">
      <ContainerInstruction />
      <ContentInstruction />
    </main>
  );
};

export default TutorialPage;
