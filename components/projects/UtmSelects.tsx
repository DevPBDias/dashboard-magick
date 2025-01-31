import React from "react";
import SelectProject from "./SelectProject";

const selectOptions = [
  { value: "low", label: "Low Priority" },
  { value: "medium", label: "Medium Priority" },
  { value: "high", label: "High Priority" },
];

const UtmSelects = () => {
  return (
    <section className="w-full flex flex-row flex-wrap lg:justify-between items-start lg:items-center gap-4">
      <SelectProject
        data={selectOptions}
        labelName="UTM Source"
        placeholder="utm_source"
      />
      <SelectProject
        data={selectOptions}
        labelName="UTM Campaign"
        placeholder="utm_campaign"
      />
      <SelectProject
        data={selectOptions}
        labelName="UTM Medium"
        placeholder="utm_medium"
      />
      <SelectProject
        data={selectOptions}
        labelName="UTM Content"
        placeholder="utm_content"
      />
      <SelectProject
        data={selectOptions}
        labelName="UTM Term"
        placeholder="utm_term"
      />
      <SelectProject
        data={selectOptions}
        labelName="UTM Id"
        placeholder="utm_id"
      />
    </section>
  );
};

export default UtmSelects;
