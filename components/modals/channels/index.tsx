"use client";
import { useModalContext } from "@/context/modal-provider";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AccountModal = ({ socialMedia }: { socialMedia: string }) => {
  const { accountModal, setAccountModal } = useModalContext();

  return (
    <section
      className={`absolute z-10 top-1/3 left-1/3 border-[1px] border-black dark:bg-muted/50 p-8 rounded-md ${
        accountModal ? "flex" : "hidden"
      } flex-col justify-center items-start min-w-1/3 gap-3`}
    >
      <h3>{socialMedia} Account Settings</h3>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default AccountModal;
