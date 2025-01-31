import { dataVisitor, InfoVisitor } from "@/constants/infoVisitors";
import VisitorCard from "./VisitorCard";

const ContainerMiddleInfo = () => {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:flex lg:flex-row  justify-between items-center gap-4">
      {dataVisitor.map((item: InfoVisitor) => (
        <VisitorCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default ContainerMiddleInfo;
