import { useState } from "react";
import CollapsibleMedia from "./CollapsibleMedia";

const ContainerCollapsible = () => {
  const [isOpenFacebook, setIsOpenFacebook] = useState(true);
  const [isOpenGoogle, setIsOpenGoogle] = useState(true);
  const [isOpenTiktok, setIsOpenTiktok] = useState(false);

  return (
    <section className="flex flex-col justify-center items-center gap-4 lg:gap-6 2xl:px-12 w-full">
      <CollapsibleMedia
        media="Facebook"
        state={isOpenFacebook}
        setter={setIsOpenFacebook}
        status="Connected"
      />
      <CollapsibleMedia
        media="Google"
        state={isOpenGoogle}
        setter={setIsOpenGoogle}
        status="Disconnected"
      />
      <CollapsibleMedia
        media="Tiktok"
        state={isOpenTiktok}
        setter={setIsOpenTiktok}
        status="Disconnected"
      />
    </section>
  );
};

export default ContainerCollapsible;
