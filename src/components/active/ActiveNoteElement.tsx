import { FC } from "react";
import type { Note } from "types/note";
import { removeNote, archiveNote } from "redux/noteSlice";
import { useAppDispatch } from "hooks/redux";
import { getCreatedTimeToString, searchForDatesInContent } from "lib/utils";
import { TableCell, TableRow } from "components/ui/table";
import { EditNoteButton } from "../EditNoteButton";

import { Button } from "components/ui/button";
import { Pen, Archive, Trash2 } from "lucide-react";
import { Icons } from "components/Icons";

const ActiveNoteElement: FC<Note> = (note) => {
  const dispatch = useAppDispatch();
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
      <TableCell className="font-medium">{getCreatedTimeToString(createdAt)}</TableCell>
      <TableCell className="font-medium">{category}</TableCell>
      <TableCell className="font-medium">{content}</TableCell>
      <TableCell className="font-medium">
        {searchForDatesInContent(content)}
      </TableCell>
      <TableCell className="font-medium">
        <div className="flex gap-2">
          <EditNoteButton note={note} />
          <Button size={"icon"} onClick={() => dispatch(archiveNote(note))}>
            <Archive className="w-4 h-4" />
          </Button>
          <Button
            size={"icon"}
            variant={"destructive"}
            onClick={() => dispatch(removeNote(id))}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ActiveNoteElement;
