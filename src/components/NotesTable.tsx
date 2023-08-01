import { RootState } from "../redux/store";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import ListElement from "./NoteElement";
import {
  selectActiveNotes,
  archiveNotes,
  deleteNotes,
} from "../redux/noteSlice";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import CreateNoteButton from "./CreateNoteButton";

const List = () => {
  const dispatch = useAppDispatch();
  const activeElementsList = useAppSelector((state: RootState) =>
    selectActiveNotes(state)
  );

  return (
    <div>
      <div className="w-full flex justify-end">
        <CreateNoteButton />
      </div>
      <Table>
        <TableCaption>A list of your notes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Dates</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activeElementsList?.map(({ id, ...props }) => (
            <ListElement key={id} {...props} id={id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default List;
