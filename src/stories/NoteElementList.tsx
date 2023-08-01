import { FC } from "react";
import { Category, type Note } from "types/note";
import { removeNote, archiveNote } from "redux/noteSlice";
import { useAppDispatch } from "hooks/redux";
import { getCreatedTimeToString, searchForDatesInContent } from "lib/utils";
import { TableCell, TableRow } from "components/ui/table";

import { Button } from "components/ui/button";
import { Pen, Archive, Trash2, ArchiveRestore } from "lucide-react";
import { Icons } from "components/Icons";

const note = {
  id: "1203lasdplas",
  category: Category.TASK,
  content: "tomatoes, bread 3/9/2021",
  createdAt: new Date(),
  name: "Shopping list",
  isArchived: false,
};

interface NoteElementList {
  isArchived: boolean;
}

export default function NoteElementList({ isArchived }: NoteElementList) {
  const { id, category, content, createdAt, name } = note;
  const Icon = Icons[category as keyof typeof Icons];

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
