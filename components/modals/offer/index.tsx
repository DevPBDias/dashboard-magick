"use client";

import { useModalContext } from "@/context/modal-provider";
import OfferContent from "./OfferContent";
import OfferModalBtns from "./OfferModalBtns";

const OfferModal = () => {
  const { callOfferModal } = useModalContext();

  return (
    <section
      className={`absolute z-10 top-1/4 left-1/2 -translate-x-1/2 dark:bg-muted/50 border-[1px] border-black dark:border-none p-8 rounded-md w-1/2 ${
        callOfferModal ? "flex" : "hidden"
      } flex-col justify-center items-start w-fit gap-3`}
    >
      <h4 className="font-bold text-lg">Offer Source Details</h4>
      <div className="flex flex-col justify-between items-start gap-4 w-full">
        <OfferContent
          labelName="Conversion postback URL"
          inputValue="https://api-v2.magicktracker.com/api/cv/bg/e6af862d301b?subid={SUBID}&orderid={ORDERID}&amount={COMMISSION_AMOUNT}&subid2={SUBID2}&subid3={SUBID3}&subid4={SUBID4}&subid5={SUBID5}&conv_type={CONV_TYPE}&emailhash={EMAILHASH}"
        />
        <OfferContent
          labelName="Checkout postback Pixel"
          inputValue="Postback Pixel"
        />
        <OfferContent
          labelName="Page view pixel to Lander/VSL"
          inputValue="<script>
                (function() {
                    var pageUrl = window.location.href;
                    var webhookUrl = 'https://api-v2.magicktracker.com/api/pv/bg/e6af862d301b?ref=page_view&subid={SUBID}&subid2={SUBID2}&subid3={SUBID3}&subid4={SUBID4}&subid5={SUBID5}&url=' + encodeURIComponent(pageUrl);
                    fetch(webhookUrl, {
                        method: 'GET'
                    })
                })();
            </script>"
        />
        <OfferContent
          labelName="Mandatory parameter in the affiliate link"
          inputValue="?subid=[mt_uid]"
        />
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-semibold text-sm">
            Example (your affiliate link):
          </p>
          <p className="dark:text-white/30 text-sm text-black/60">
            https://example.com/?subid=[mt_uid]
          </p>
        </div>
      </div>
      <OfferModalBtns />
    </section>
  );
};

export default OfferModal;
