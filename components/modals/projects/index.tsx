"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { useModalContext } from "@/context/modal-provider";
import SelectFormField from "./SelectFormField";
import InputFormField from "./InputFormField";
import VerifyBtn from "./VerifyBtn";
import CloseBtn from "./CloseBtn";
import SubmitBtn from "./SubmitBtn";

const FormSchema = z.object({
  currency: z.string({
    message: "Currency must be at selected.",
  }),
  timezone: z.string({
    message: "Timezone must be at selected.",
  }),
  domain: z.string({
    message: "Domain must be at selected.",
  }),
});

const valuesForm: { id: number; value: string }[] = [
  {
    id: 1,
    value: "m@gmail.com",
  },
  {
    id: 2,
    value: "m@teste.com",
  },
  {
    id: 3,
    value: "m@example.com",
  },
];

export function SettingsProjectModal() {
  const { callModal, setCallModal } = useModalContext();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      timezone: "",
      currency: "",
      domain: "",
    },
  });

  function resetForm() {
    if (form.formState.isSubmitSuccessful) {
      form.reset({ currency: "", domain: "", timezone: "" });
      setCallModal(!callModal);
    }
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    console.log(data);
    setInterval(() => setLoading(false), 2000);
    resetForm();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`absolute z-10 top-0 left-0 w-full h-screen border-[1px] border-black dark:bg-muted/50 rounded-md ${
          callModal ? "flex" : "hidden"
        } flex-col justify-start items-start gap-3`}
      >
        <div className="bg-black w-full lg:w-[500px] flex flex-col justify-center items-start px-4 py-6 gap-4 m-auto rounded-md">
          <h4 className="text-lg">Project Settings</h4>
          <SelectFormField
            form={form.control}
            fieldName="currency"
            labelName="Currency:"
            placeholder="Select a currency"
            values={valuesForm}
          />
          <InputFormField
            form={form.control}
            fieldName="domain"
            labelName="Domain:"
            placeholder="teste.com"
            btnName="Editar"
          />
          <VerifyBtn />
          <div className="w-full flex flex-row justify-end items-center gap-4">
            <CloseBtn />
            <SubmitBtn loading={loading} />
          </div>
        </div>
      </form>
    </Form>
  );
}
