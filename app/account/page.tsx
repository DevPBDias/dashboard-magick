import BillingCard from "@/components/account/BillingCard";
import SessionCard from "@/components/account/SessionCard";
import UserCard from "@/components/account/UserCard";
import PlanPricesModal from "@/components/modals/account";
import { HandMetal } from "lucide-react";
import React from "react";

const AccountPage = () => {
  return (
    <main className="bg-sidebar p-3 border-t h-full flex flex-col justify-start items-start gap-8 dark:bg-muted/50">
      <h3 className="font-bold text-xl flex justify-center items-center gap-2">
        <HandMetal /> Username
      </h3>
      <section className="grid w-full grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 2xl:grid-cols-3 2xl:grid-rows-3  gap-3">
        <UserCard />
        <SessionCard />
        <BillingCard />
      </section>
      <PlanPricesModal />
    </main>
  );
};

export default AccountPage;
