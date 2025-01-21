export interface InfoVisitor {
  id: number;
  title: string;
  value: string;
}

export const dataVisitor: InfoVisitor[] = [
  {
    id: 1,
    title: "Visitors",
    value: "0",
  },
  {
    id: 2,
    title: "Clicks",
    value: "0",
  },
  {
    id: 3,
    title: "CPC",
    value: "0.0",
  },
  {
    id: 4,
    title: "EPC",
    value: "0.0",
  },
  {
    id: 5,
    title: "Engagements",
    value: "0",
  },
  {
    id: 6,
    title: "ECR",
    value: "0.0 %",
  },
  {
    id: 7,
    title: "CPE",
    value: "0.0",
  },
  {
    id: 8,
    title: "EPE",
    value: "0.0",
  },
  {
    id: 9,
    title: "Sales / Refund",
    value: "0 / 0",
  },
  {
    id: 10,
    title: "SCR",
    value: "0.0 %",
  },
  {
    id: 11,
    title: "CAC",
    value: "0.0",
  },
  {
    id: 12,
    title: "AOV",
    value: "0.0",
  },
];
