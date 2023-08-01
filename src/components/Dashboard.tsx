import List from "./NotesTable";
import { useAppSelector } from "../hooks/redux";
import Summary from "./NotesSummaryTable";
import CreateNoteButton from "./CreateNoteButton";
import { RootState } from "../redux/store";
import { selectPopupEditState } from "../redux/noteSlice";
import NotesTable from "./NotesTable";

const Dashboard = () => {
  const popupEditState = useAppSelector((state: RootState) =>
    selectPopupEditState(state)
  );

  return (
    <>
      <NotesTable />
      <Summary />
    </>
  );
};

export default Dashboard;
