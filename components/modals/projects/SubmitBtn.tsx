"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const SubmitBtn = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading ? (
        <Button disabled>
          <Loader2 className="animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
};

export default SubmitBtn;
