import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecione o projeto" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Todos">Todos</SelectItem>
          <SelectItem value="Projeto 1">Projeto 1</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
