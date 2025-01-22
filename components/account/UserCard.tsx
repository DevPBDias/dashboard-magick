import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScanFace } from "lucide-react";

const UserCard = () => {
  return (
    <Card className="flex flex-col justify-start items-start gap-8 w-full p-4">
      <CardHeader>
        <CardTitle className="font-semibold text-xl">User</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-start gap-8">
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">First Name</h5>
          <p className="dark:text-white/60">YoutubeP</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">Email addresses</h5>
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="dark:text-white/60">teste@gmail.com</p>
            <span className="font-semibold text-xs py-1 px-2 bg-purple-200 text-purple-700 rounded-2xl">
              Primary
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">Profile Image</h5>
          <ScanFace size={36} />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
