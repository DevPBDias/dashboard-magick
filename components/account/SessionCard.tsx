import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dot } from "lucide-react";

const SessionCard = () => {
  return (
    <Card className="flex flex-col justify-start items-start gap-8 w-full p-4">
      <CardHeader>
        <CardTitle className="font-semibold text-xl">Session</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-start gap-8">
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">Status</h5>
          <div className="flex flex-row justify-center items-center gap-1 bg-green-100 text-xs py-1 px-2 rounded-2xl">
            <Dot color="#166534" size={16} />
            <p className="text-green-800 font-bold">Active</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">Last Active</h5>
          <p className="dark:text-white/60">22/01/2025, 16:25:43</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">Expiry</h5>
          <p className="dark:text-white/60">27/01/2025, 17:37:21</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionCard;
