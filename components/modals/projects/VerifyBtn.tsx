import { Button } from "@/components/ui/button";

const VerifyBtn = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <p>Domínio não verificado!</p>
      <Button type="button" variant="outline" className="bg-muted/50">
        Verificar
      </Button>
    </div>
  );
};

export default VerifyBtn;
