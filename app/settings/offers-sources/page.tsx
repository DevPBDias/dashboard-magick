"use client";
import AfiliateModal from "@/components/modals/afiliate";
import OfferModal from "@/components/modals/offer";
import ContainerInputs from "@/components/offers/ContainerInputs";
import SavedInputs from "@/components/offers/SavedInputs";
import { Button } from "@/components/ui/button";
import { useModalContext } from "@/context/modal-provider";
import { useOfferSourceContext } from "@/context/offer-provider";
import { BadgeDollarSign, Plus } from "lucide-react";

const OffersSources = () => {
  const { showPlus, setShowPlus, savedInputs } = useOfferSourceContext();
  const { callModal, setCallModal, showOffer } = useModalContext();

  return (
    <main className="relative bg-sidebar p-8 flex-1 flex flex-col justify-start items-start gap-4 dark:bg-muted/50 border-t-[1px] border-white/10">
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
              onClick={() => {
                setCallModal(!callModal);
                setShowPlus(!showPlus);
              }}
            >
              <Plus />
            </Button>
          )}
        </div>
        <OfferModal />
        <AfiliateModal />
        {savedInputs && <SavedInputs />}
      </section>
    </main>
  );
};

export default OffersSources;
