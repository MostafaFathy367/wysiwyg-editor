import { Skeleton } from "./ui/skeleton";

const ControlledEditorSkeleton = () => (
  <div className="space-y-2">
    <Skeleton className="h-8 w-32" />
    <Skeleton className="h-[150px]" />
  </div>
);

export default ControlledEditorSkeleton;
