"use client";

import { PlanPrices, planPricesData } from "@/constants/planPricesData";
import { useModalContext } from "@/context/modal-provider";
import PlanCard from "./PlanCard";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const PlanPricesModal = () => {
  const { callModal, setCallModal } = useModalContext();

  return (
    <main
      className={`${
        callModal ? "grid" : "hidden"
      } absolute z-10 top-0 left-0 w-full min-h-screen dark:bg-black/70 p-8 rounded-md grid-cols-3 justify-center items-center gap-8 bg-white`}
    >
      {planPricesData.map((plan: PlanPrices) => (
        <PlanCard data={plan} />
      ))}
      <Button
        className="absolute z-20 bottom-14 left-1/2 -translate-x-1/2 flex flex-row justify-center items-center w-40"
        onClick={() => setCallModal(!callModal)}
      >
        <X />
        <p className="font-bold">Close</p>
      </Button>
    </main>
  );
};

export default PlanPricesModal;
