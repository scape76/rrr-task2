import { FC } from "react";
import type { Category } from "types/note";
import { TableCell, TableRow } from "components/ui/table";
import { Icons } from "./Icons";
import type { LucideIcon } from "lucide-react";

interface SummaryElementProps {
  category: Category;
  active: number;
  archived: number;
}

const SummaryElement: FC<SummaryElementProps> = ({
  category,
  active,
  archived,
}) => {
  const Icon = Icons[category as keyof typeof Icons];

  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          <Icon />
          {category}
        </div>
      </TableCell>
      <TableCell className="font-medium">{active}</TableCell>
      <TableCell className="font-medium">{archived}</TableCell>
    </TableRow>
  );
};

export default SummaryElement;
