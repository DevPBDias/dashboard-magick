import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoVisitor } from "@/constants/infoVisitors";

interface InfoCardProps {
  data: InfoVisitor;
}

const VisitorCard = ({ data }: InfoCardProps) => {
  return (
    <Card className="w-full h-full flex flex-col justify-between items-center">
      <CardHeader>
        <CardTitle className="text-sm font-light text-gray-400 w-full text-center">
          {data.title}
        </CardTitle>
      </CardHeader>
      <CardContent className={`text-lg font-normal w-full text-center`}>
        <p>{data.value}</p>
      </CardContent>
    </Card>
  );
};

export default VisitorCard;
