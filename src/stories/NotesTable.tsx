import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import { Button } from "./Button";
import { Archive, ArchiveRestore, Trash2 } from "lucide-react";
import { Icons } from "components/Icons";
import NoteElementList from "./NoteElementList";
import { Note } from "types/note";

interface NotesTableProps {
  notes: Note[];
  isArchived: boolean;
  isLoading: boolean;
}

export default function NotesTable({
  notes,
  isArchived,
  isLoading,
}: NotesTableProps) {
  return (
    <div>
      <div className="w-full flex justify-end my-2">
        <Button variant={"ghost"}>
          <Icons.plus className="mr-2 h-4 w-4" />
          Create note
        </Button>
      </div>
      <Table>
        <TableCaption>
          A list of your {isArchived ? "archived" : "active"} notes.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>
              <div className="flex items-center gap-2 ml-11">
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
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notes.length ? (
            notes.map((note) => (
              <NoteElementList
                {...note}
                isArchived={isArchived}
                isLoading={isLoading}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
