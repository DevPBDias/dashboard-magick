"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowDown, ArrowUp, UnplugIcon } from "lucide-react";

const ContainerInputAction = () => {
  return (
    <div className="flex flex-row lg:flex-col 2xl:flex-row justify-start items-start gap-3 w-full">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 w-full">
        <Select>
          <SelectTrigger className="w-full lg:w-[150px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Click">Click</SelectItem>
              <SelectItem value="PageView">PageView</SelectItem>
              <SelectItem value="Event">Event</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full lg:w-[150px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Pre-landing">Pre-landing</SelectItem>
              <SelectItem value="Landing">Landing</SelectItem>
              <SelectItem value="Offer">Offer</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          className="w-full lg:w-40"
          type="text"
          placeholder="Beautiful Name"
        />
        <Input
          className="w-full lg:w-40"
          type="text"
          placeholder="CSS Class or ID"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <Button type="button">
          <ArrowDown />
        </Button>
        <Button type="button">
          <ArrowUp />
        </Button>
        <Button type="button">
          <UnplugIcon />
        </Button>
      </div>
    </div>
  );
};

export default ContainerInputAction;
