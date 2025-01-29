import { dataVisitor, InfoVisitor } from "@/constants/infoVisitors";
import VisitorCard from "./VisitorCard";

const ContainerMiddleInfo = () => {
  return (
    <section className="w-full flex flex-row justify-between items-center gap-4">
      {dataVisitor.map((item: InfoVisitor) => (
        <VisitorCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default ContainerMiddleInfo;
