import React from "react";

const ContentInstruction = () => {
  return (
    <section className="flex flex-col gap-3 w-full h-full p-2 ml-auto">
      <h4 className="border-b-2 dark:border-white/30 py-2 text-xl font-bold">
        ContentInstruction
      </h4>
      <section className="w-full h-full p-2 flex flex-col justify-center items-center text-4xl font-bold">
        Content is HERE !
      </section>
    </section>
  );
};

export default ContentInstruction;
