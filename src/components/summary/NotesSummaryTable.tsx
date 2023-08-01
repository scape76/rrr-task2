import { useSelector } from "react-redux";
import { selectActiveNotes, selectArchivedNotes } from "../../redux/noteSlice";
import type { Category } from "types/note";
import { RootState } from "../../redux/store";
import { Note } from "../../types/note";
import SummaryElement from "./SummaryElement";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";

const getNumberOfAppropriateCategoryItems = (
  array: Note[],
  categoryName: Category
) => array.filter(({ category }) => category === categoryName).length;

interface NoteInfo {
  category: Category;
  active: number;
  archived: number;
}

const NotesSummaryTable = () => {
  const activeNotes = useSelector((state: RootState) =>
    selectActiveNotes(state)
  );
  const archivedNotes = useSelector((state: RootState) =>
    selectArchivedNotes(state)
  );

  const categories = ["task", "idea", "thought"] as Category[];
  const numberOfTasksForCategory: NoteInfo[] = [];
  categories.forEach((category: Category) => {
    const numberOfArchived = getNumberOfAppropriateCategoryItems(
      archivedNotes,
      category
    );
    const numberOfActive = getNumberOfAppropriateCategoryItems(
      activeNotes,
      category
    );
    if (numberOfArchived || numberOfActive) {
      numberOfTasksForCategory.push({
        category,
        active: numberOfActive,
        archived: numberOfArchived,
      });
    }
    return;
  });

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>Note Category</TableHead>
          <TableHead>Active</TableHead>
          <TableHead>Archived</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {numberOfTasksForCategory.map(({ category, active, archived }) => (
          <SummaryElement
            key={category}
            category={category}
            active={active}
            archived={archived}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default NotesSummaryTable;
