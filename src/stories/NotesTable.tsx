import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import { Button } from "./Button";
import { Archive, ArchiveRestore, Trash2 } from "lucide-react";
import { Icons } from "components/Icons";
import NoteElementList from "./NoteElementList";

interface NotesTableProps {
  children: React.ReactNode;
  isArchived: boolean;
}

export default function NotesTable({ children, isArchived }: NotesTableProps) {
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
          <NoteElementList isArchived={isArchived}/>
        </TableBody>
      </Table>
    </div>
  );
}
