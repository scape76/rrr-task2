import { RootState } from "redux/store";
import { useAppSelector } from "hooks/redux";
import { selectArchivedNotes } from "redux/noteSlice";

import ArchivedListElement from "./ArchivedNoteElement";
import NotesTable from "components/NotesTable";

export default function ArchivedNotesTable() {
  const arcivedElementsList = useAppSelector((state: RootState) =>
    selectArchivedNotes(state)
  );

  return (
    <NotesTable isArchived={true}>
      {arcivedElementsList?.map(({ id, ...props }) => (
        <ArchivedListElement key={id} {...props} id={id} />
      ))}
    </NotesTable>
  );
}
