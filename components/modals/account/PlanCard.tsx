import { PlanPrices } from "@/constants/planPricesData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface PlanProps {
  data: PlanPrices;
}

const PlanCard = ({ data }: PlanProps) => {
  return (
    <Card
      className={`flex flex-col justify-center ${
        data.highlighted && "dark:text-black dark:bg-white text-white bg-black"
      } items-center gap-8 w-full py-6 px-16 hover:scale-105`}
    >
      <CardHeader>
        <CardTitle className="font-bold text-6xl flex flex-row justify-center items-end w-full">
          ${data.price}
          <p className="font-normal text-xl">/mês</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-start gap-10">
        <div className="flex flex-col justify-center items-start gap-1">
          <p className="text-lg">{data.type}</p>
          <p>{data.description}</p>
        </div>
        <Button
          className={`${
            data.highlighted &&
            "dark:text-white dark:bg-black text-black bg-white hover:text-white"
          } w-full`}
        >
          Upgrade plan
        </Button>
        <div className="flex flex-col justify-center items-start gap-2">
          {data.options.map((option) => (
            <div className="flex flex-row justify-start items-center gap-2 w-full">
              <CheckCircle size={16} />
              <p>{option}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
