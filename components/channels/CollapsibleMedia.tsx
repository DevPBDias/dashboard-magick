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
      <CollapsibleTrigger className="w-full rounded-md flex flex-row justify-start items-center p-3 gap-3 bg-gray-100 dark:bg-muted/60">
        <ChevronDown size={14} />
        <p className="text-lg">{media}</p>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-3 lg:px-12 py-6">
        <ContainerSocialMedia media={media} status={status} />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleMedia;
