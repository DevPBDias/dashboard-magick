"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FormSchema = z.object({
  afilitate: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function SearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      afilitate: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex flex-row justify-center items-center"
      >
        <FormField
          control={form.control}
          name="afilitate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-72 lg:w-80 pl-10"
                  type="text"
                  placeholder="Search"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Search size={20} className="absolute z-20 top-2 left-2" />
      </form>
    </Form>
  );
}
