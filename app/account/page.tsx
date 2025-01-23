import BillingCard from "@/components/account/BillingCard";
import SessionCard from "@/components/account/SessionCard";
import UserCard from "@/components/account/UserCard";
import PlanPricesModal from "@/components/modals/account";
import { HandMetal } from "lucide-react";
import React from "react";

const AccountPage = () => {
  return (
    <main className="bg-sidebar m-4 p-4 rounded-md h-full flex flex-col justify-start items-start gap-8 dark:bg-muted/50">
      <h3 className="font-bold text-2xl flex justify-center items-center gap-2">
        <HandMetal /> Username
      </h3>
      <section className="grid w-full grid-cols-3 grid-rows-1 gap-3">
        <UserCard />
        <SessionCard />
        <BillingCard />
      </section>
      <PlanPricesModal />
    </main>
  );
};

export default AccountPage;
