"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarDashboard() {
  const [date, setDate] = React.useState<Date | undefined>();

  const months = new Date().getMonth();

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  );
}
