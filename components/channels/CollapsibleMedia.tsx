import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import ContainerSocialMedia from "./ContainerSocialMedia";

interface MediaProps {
  state: boolean;
  setter: any;
  media: string;
  status: string;
}

const CollapsibleMedia = ({ state, setter, media, status }: MediaProps) => {
  return (
    <Collapsible
      open={state}
      onOpenChange={setter}
      className="w-full dark:bg-muted/50 rounded-md"
    >
      <CollapsibleTrigger className="w-full rounded-md flex flex-row justify-start items-center p-4 gap-4 bg-gray-100 dark:bg-muted/60">
        <ChevronDown className="h-4 w-4" />
        <p className="text-lg">{media}</p>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-24 py-6">
        <ContainerSocialMedia media={media} status={status} />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleMedia;
