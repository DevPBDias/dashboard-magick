export interface InfoClient {
  id: number;
  title: string;
  value: string;
  color: string;
}

export const dataClient: InfoClient[] = [
  {
    id: 1,
    title: "Profit",
    value: "$0.00",
    color: "text-green-500",
  },
  {
    id: 2,
    title: "ROAS",
    value: "x0.00",
    color: "text-green-500",
  },
  {
    id: 3,
    title: "ROI",
    value: "0.00",
    color: "text-red-500",
  },
  {
    id: 4,
    title: "Revenue",
    value: "$0.00",
    color: "text-green-500",
  },
  {
    id: 5,
    title: "Cost",
    value: "$0.00",
    color: "text-green-500",
  },
  {
    id: 6,
    title: "Cost per page view",
    value: "$0.00",
    color: "text-green-500",
  },
  {
    id: 7,
    title: "Presell pass rate",
    value: "0.00%",
    color: "text-red-500",
  },
  {
    id: 8,
    title: "Real Presell pass rate",
    value: "0.00%",
    color: "text-red-500",
  },
  {
    id: 9,
    title: "Checkout Conversion Rate",
    value: "0.00%",
    color: "text-red-500",
  },
  {
    id: 10,
    title: "Conversion Rate",
    value: "0.00%",
    color: "text-green-500",
  },
];
