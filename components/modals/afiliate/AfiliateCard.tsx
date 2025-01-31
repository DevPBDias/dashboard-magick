"use client";

import { Button } from "@/components/ui/button";
import { useModalContext } from "@/context/modal-provider";
import { useOfferSourceContext } from "@/context/offer-provider";
import { Plus } from "lucide-react";

const affiliateNetworks = [
  {
    id: 1,
    name: "Global Reach Network",
    description:
      "Expand your business globally with our trusted affiliate partners.",
  },
  {
    id: 2,
    name: "TechBoost Affiliates",
    description:
      "Join the leading tech affiliate program for gadgets and software.",
  },
  {
    id: 3,
    name: "HealthPro Network",
    description:
      "Promote health and wellness products with competitive commissions.",
  },
];

const AfiliateCard = () => {
  const { setCallModal, callModal } = useModalContext();
  const { setSavedInputs, savedInputs } = useOfferSourceContext();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 w-full">
      <Button
        variant="secondary"
        className="border rounded-lg shadow-lg flex flex-row justify-center items-center w-full py-12 gap-3 border-dashed h-full"
      >
        <Plus size={20} />
        <h3 className="text-lg">Afiliar nova rede</h3>
      </Button>
      {affiliateNetworks.map((network) => (
        <Button
          key={network.id}
          className="relative border rounded-lg shadow-lg flex flex-col h-full justify-center items-center w-full py-12 hover:bg-white/10"
          onClick={() => {
            setSavedInputs(!savedInputs);
            setCallModal(!callModal);
          }}
          variant="ghost"
        >
          <h3 className="text-lg font-semibold">{network.name}</h3>
        </Button>
      ))}
    </section>
  );
};

export default AfiliateCard;
