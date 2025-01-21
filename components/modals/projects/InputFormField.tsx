"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type InputProps = {
  form: any;
  labelName: string;
  fieldName: string;
  btnName: string;
  placeholder: any;
};

const InputFormField = ({
  form,
  labelName,
  fieldName,
  btnName,
  placeholder,
}: InputProps) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <div className="flex flex-row justify-center items-end gap-4">
          <FormItem className="flex flex-row justify-center items-center gap-2">
            <FormLabel className="text-base">{labelName}</FormLabel>
            <FormControl>
              <Input
                className="min-w-[220px]"
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          </FormItem>
          <Button type="button" variant="outline" className="bg-muted/50">
            {btnName}
          </Button>
        </div>
      )}
    />
  );
};

export default InputFormField;
