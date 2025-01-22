"use client";
import { useModalContext } from "@/context/modal-provider";
import { Button } from "@/components/ui/button";

const OfferModalBtns = () => {
  const { callOfferModal, setCallOfferModal } = useModalContext();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => setCallOfferModal(!callOfferModal)}
      className="ml-auto"
    >
      Close
    </Button>
  );
};

export default OfferModalBtns;
