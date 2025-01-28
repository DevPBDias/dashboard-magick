import { useModalContext } from "@/context/modal-provider";
import AfiliateCard from "./AfiliateCard";
import { SearchForm } from "./SearchForm";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const AfiliateModal = () => {
  const { callModal, setCallModal } = useModalContext();

  return (
    <main
      className={`${
        callModal ? "flex" : "hidden"
      } absolute z-10 top-0 left-1/2 w-3/4 max-h-full -translate-x-1/2 dark:bg-black p-8 rounded-md flex-col justify-start items-start gap-4`}
    >
      <div className="flex flex-row w-full justify-between items-center dark:bg-black">
        <h4 className="text-2xl">New Affiliate Network</h4>
        <Button
          className="flex flex-row justify-center items-center p-2"
          onClick={() => setCallModal(!callModal)}
        >
          <X />
        </Button>
      </div>
      <SearchForm />
      <AfiliateCard />
    </main>
  );
};

export default AfiliateModal;
