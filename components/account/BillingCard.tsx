"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dot } from "lucide-react";
import { Button } from "../ui/button";
import { useModalContext } from "@/context/modal-provider";

const BillingCard = () => {
  const { callModal, setCallModal } = useModalContext();

  return (
    <Card className="flex flex-col justify-center items-start gap-8 w-full p-4">
      <CardHeader>
        <CardTitle className="font-semibold text-xl">Billing</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-start gap-8">
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">Plan</h5>
          <div className="flex flex-row justify-center items-center gap-1 bg-green-100 text-xs py-1 px-2 rounded-2xl">
            <Dot color="#166534" size={16} />
            <p className="text-green-800 font-bold">Free</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">Status</h5>
          <div className="flex flex-row justify-center items-center gap-1 bg-green-100 text-xs py-1 px-2 rounded-2xl">
            <Dot color="#166534" size={16} />
            <p className="text-green-800 font-bold">Active</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <h5 className="font-semibold text-base">Expiry</h5>
          <p className="dark:text-white/60">2025 - 02 - 02</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setCallModal(!callModal)}>Upgrade</Button>
      </CardFooter>
    </Card>
  );
};

export default BillingCard;
