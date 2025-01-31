import { dataClient, InfoClient } from "@/constants/infoClient";
import InfoCard from "./InfoCard";

const ContainerHeaderInfo = () => {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 2xl:grid-cols-5 lg:gap-4">
      {dataClient.map((item: InfoClient) => (
        <InfoCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default ContainerHeaderInfo;
