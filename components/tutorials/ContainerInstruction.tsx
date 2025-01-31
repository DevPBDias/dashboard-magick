"use client";

import CollapsibleInstruction from "./CollapsibleInstruction";
import { instructions } from "@/constants/tutorialLinks";

const ContainerInstruction = () => {
  return (
    <section className="flex flex-col gap-3 border p-2 min-w-fit h-full">
      <h4 className="border-b-2 dark:border-white/30 py-2 text-xl font-bold">
        Instruções do app
      </h4>
      <section className="flex flex-col">
        <CollapsibleInstruction links={instructions[0]} title="Introdução" />
        <CollapsibleInstruction
          links={instructions[1]}
          title="Configuração das fontes de ofertas"
        />
        <CollapsibleInstruction
          links={instructions[2]}
          title="Fontes de Tráfego"
        />
        <CollapsibleInstruction links={instructions[3]} title="Integrações" />
      </section>
    </section>
  );
};

export default ContainerInstruction;
