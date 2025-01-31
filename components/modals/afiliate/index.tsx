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
      } absolute z-10 top-0 left-0 w-full h-full dark:bg-muted/50 rounded-md flex-col justify-start items-start lg:items-center`}
    >
      <div className="flex flex-col w-full lg:w-3/4 justify-start items-start bg-black p-3 gap-4">
        <div className="flex flex-row w-full justify-between items-center dark:bg-black">
          <h4 className="text-xl font-bold">New Affiliate Network</h4>
          <Button onClick={() => setCallModal(!callModal)}>
            <X size={14} />
          </Button>
        </div>
        <SearchForm />
        <AfiliateCard />
      </div>
    </main>
  );
};

export default AfiliateModal;
