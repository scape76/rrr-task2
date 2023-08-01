import { FC } from "react";
import { Category, type Note } from "types/note";
import { removeNote, archiveNote } from "redux/noteSlice";
import { useAppDispatch } from "hooks/redux";
import { cn, getCreatedTimeToString, searchForDatesInContent } from "lib/utils";
import { TableCell, TableRow } from "components/ui/table";

import { Button } from "components/ui/button";
import { Pen, Archive, Trash2, ArchiveRestore } from "lucide-react";
import { Icons } from "components/Icons";
import { Skeleton } from "components/ui/skeleton";

const note = {
  id: "1203lasdplas",
  category: Category.TASK,
  content: "tomatoes, bread 3/9/2021",
  createdAt: new Date(),
  name: "Shopping list",
  isArchived: false,
};

interface NoteElementList {
  id?: string;
  name: string;
  createdAt: Date;
  content: string;
  category: Category;
  isArchived: boolean;
  isLoading: boolean;
}

export default function NoteElementList({
  name,
  createdAt,
  content,
  category,
  isArchived,
  isLoading,
  id = "1",
}: NoteElementList) {
  const Icon = Icons[category as keyof typeof Icons];

  if (isLoading) return <NoteElementListSkeleton />;

  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          <Icon />
          {name}
        </div>
      </TableCell>
      <TableCell className="font-medium">
        {getCreatedTimeToString(createdAt)}
      </TableCell>
      <TableCell className="font-medium">{category}</TableCell>
      <TableCell className="font-medium">{content}</TableCell>
      <TableCell className="font-medium">
        {searchForDatesInContent(content)}
      </TableCell>
      <TableCell className="font-medium">
        <div className="flex gap-2">
          <Button size={"icon"}>
            <Pen className="w-4 h-4" />
          </Button>
          <Button size={"icon"}>
            {isArchived ? (
              <ArchiveRestore className="w-4 h-4" />
            ) : (
              <Archive className="w-4 h-4" />
            )}
          </Button>
          <Button size={"icon"} variant={"destructive"}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}

function NoteElementListSkeleton() {
  return (
    <TableRow>
      <TableCell>
        <div className="flex gap-2">
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-24 h-6" />
        </div>
      </TableCell>
      <TableCell>
        <Skeleton className="w-24 h-6" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-10 h-6" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-48 h-6" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-16 h-6" />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Skeleton className="w-9 h-9" />
          <Skeleton className="w-9 h-9" />
          <Skeleton className="w-9 h-9" />
        </div>
      </TableCell>
    </TableRow>
  );
}
