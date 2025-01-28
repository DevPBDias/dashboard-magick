import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timezones = [
  { id: 1, name: "Pacific Time (PT)", offset: "-08:00" },
  { id: 2, name: "Eastern Time (ET)", offset: "-05:00" },
  { id: 3, name: "Greenwich Mean Time (GMT)", offset: "+00:00" },
  { id: 4, name: "Central European Time (CET)", offset: "+01:00" },
  { id: 5, name: "Japan Standard Time (JST)", offset: "+09:00" },
];

export function SelectTimezone() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecione timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {timezones.map((time) => (
            <SelectItem key={time.id} value={time.name}>
              {time.name} | {time.offset}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
