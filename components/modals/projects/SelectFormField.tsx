"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectProps = {
  form: any;
  labelName: string;
  fieldName: string;
  placeholder: string;
  values: any;
};

const SelectFormField = ({
  form,
  labelName,
  fieldName,
  placeholder,
  values,
}: SelectProps) => {
  return (
    <FormField
      control={form}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-center gap-3">
          <FormLabel className="text-base">{labelName}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="min-w-[300px]">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {values?.map((item: any) => (
                <SelectItem key={item.id} value={item.value}>
                  {item.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectFormField;
