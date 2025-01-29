import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  labelName: string;
  placeholder: string;
  data: any;
}

const SelectProject = ({ labelName, placeholder, data }: SelectProps) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <p>{labelName}</p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data?.map((item: any) => (
            <SelectItem key={item.value} value={item.label}>
              {item.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectProject;
