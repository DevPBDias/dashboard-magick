export type PlanPrices = {
  price: number;
  type: string;
  description: string;
  highlighted: boolean;
  options: string[];
};

export const planPricesData: PlanPrices[] = [
  {
    price: 97,
    type: "Basic",
    description: "For beginners on a budget who want the best basic tracking",
    highlighted: false,
    options: [
      "Up to 10k clicks/month",
      "1 project",
      "1 domain",
      "1 funnel",
      "1 offer source",
      "2 traffic channels",
      "Up to 5 engagements",
      "1 month of data retention",
    ],
  },
  {
    price: 477,
    type: "Advanced",
    description:
      "For you who are starting to scale or have already scaled your million-dollar business",
    highlighted: true,
    options: [
      "Up to 100k clicks/month",
      "3 project",
      "3 domain",
      "10 funnels",
      "10 offers sources",
      "10 traffic channels",
      "Up to 50 engagements",
      "1 year of data retention Integrations",
      "Leads management*",
    ],
  },
  {
    price: 977,
    type: "Expert",
    description:
      "For owners of millionaire offers who have several online businesses",
    highlighted: false,
    options: [
      "All advanced",
      "Unlimited million clicks/month",
      "Unlimited project",
      "Unlimited domain",
      "Unlimited funnel",
      "Unlimited offer source",
      "2 traffic channels",
      "No retention limit",
      "Leads management*",
    ],
  },
];
