import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import CreateNoteButton from "./CreateNoteButton";
import ToggleArchiveButton from "./ToggleArchiveButton";
import DeleteNotesButton from "./DeleteNotesButton";

interface NotesTableProps {
  children: React.ReactNode;
  isArchived: boolean;
}

export default function NotesTable({ children, isArchived }: NotesTableProps) {
  return (
    <div>
      <div className="w-full flex justify-end my-2">
        <CreateNoteButton />
      </div>
      <Table>
        <TableCaption>A list of your {isArchived ? "archived" : "active"} notes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>
              <div className="flex items-center gap-2 ml-11">
                <ToggleArchiveButton isArchived={isArchived} />
                <DeleteNotesButton isArchived={isArchived} />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
    </div>
  );
}
