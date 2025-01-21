import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoClient } from "@/constants/infoClient";

interface InfoCardProps {
  data: InfoClient;
}

const InfoCard = ({ data }: InfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-light text-gray-400 text-center">
          {data.title}
        </CardTitle>
      </CardHeader>
      <CardContent className={`text-lg ${data.color} font-bold text-center`}>
        <p>{data.value}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
