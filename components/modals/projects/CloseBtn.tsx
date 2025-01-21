"use client";
import { useModalContext } from "@/context/modal-provider";
import { Button } from "@/components/ui/button";

const CloseBtn = () => {
  const { callModal, setCallModal } = useModalContext();

  return (
    <Button
      type="button"
      variant="outline"
      className="bg-muted/50"
      onClick={() => setCallModal(!callModal)}
    >
      Fechar
    </Button>
  );
};

export default CloseBtn;
