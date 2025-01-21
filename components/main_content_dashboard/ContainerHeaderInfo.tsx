import { dataClient, InfoClient } from "@/constants/infoClient";
import InfoCard from "./InfoCard";

const ContainerHeaderInfo = () => {
  return (
    <section className="w-full grid grid-cols-5 gap-4">
      {dataClient.map((item: InfoClient) => (
        <InfoCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default ContainerHeaderInfo;
