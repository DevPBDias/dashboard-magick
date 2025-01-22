"use client";
import OfferModal from "@/components/modals/offer";
import ContainerInputs from "@/components/offers/ContainerInputs";
import SavedInputs from "@/components/offers/SavedInputs";
import { Button } from "@/components/ui/button";
import { useOfferSourceContext } from "@/context/offer-provider";
import { BadgeDollarSign, Plus } from "lucide-react";

const OffersSources = () => {
  const { savedInputs, showInputs, HandleInputs, showPlus } =
    useOfferSourceContext();

  return (
    <main className="bg-sidebar m-4 p-4 rounded-md h-full flex flex-col justify-start items-start gap-4 dark:bg-muted/50">
      <div className="flex flex-row justify-start items-center gap-2">
        <BadgeDollarSign size={18} />
        <h4 className="text-lg">Offers Sources</h4>
      </div>
      <section className="flex flex-row justify-start items-start gap-2 px-6 w-full">
        <div className="flex flex-row justify-start items-start gap-2">
          <h5 className="w-[110px]">Offers Sources</h5>
          {!showPlus && (
            <Button
              variant="outline"
              className="dark:bg-muted/50 "
              size="icon"
              onClick={HandleInputs}
            >
              <Plus />
            </Button>
          )}
        </div>
        <OfferModal />
        {savedInputs && <SavedInputs />}
        {showInputs && <ContainerInputs />}
      </section>
    </main>
  );
};

export default OffersSources;
