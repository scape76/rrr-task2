import { RootState } from "redux/store";
import { useAppSelector } from "hooks/redux";
import ActiveNoteElement from "./ActiveNoteElement";
import { selectActiveNotes } from "redux/noteSlice";

import NotesTable from "components/NotesTable";

export default function ActiveNotesTable() {
  const activeElementsList = useAppSelector((state: RootState) =>
    selectActiveNotes(state)
  );

  return (
    <NotesTable isArchived={false}>
      {activeElementsList?.map(({ id, ...props }) => (
        <ActiveNoteElement key={id} {...props} id={id} />
      ))}
    </NotesTable>
  );
}
