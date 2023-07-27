import { useSelector } from "react-redux";
import { selectActiveTodos, selectArchivedTodos } from "../redux/todoSlice";
import type { Category } from "types/todo";
import { RootState } from "../redux/store";
import { Todo } from "../types/todo";
import SummaryElement from "./SummaryElement";

const getNumberOfAppropriateCategoryItems = (
  array: Todo[],
  categoryName: Category
) => array.filter(({ category }) => category === categoryName).length;

interface TodoInfo {
  category: Category;
  active: number;
  archived: number;
}

const Summary = () => {
  const activeTodos = useSelector((state: RootState) =>
    selectActiveTodos(state)
  );
  const archivedTodos = useSelector((state: RootState) =>
    selectArchivedTodos(state)
  );

  const categories = ["task", "idea", "thought"] as Category[]
  const numberOfTasksForCategory: TodoInfo[] = [];
  categories
    .forEach((category: Category) => {
      const numberOfArchived = getNumberOfAppropriateCategoryItems(
        archivedTodos,
        category
      );
      const numberOfActive = getNumberOfAppropriateCategoryItems(
        activeTodos,
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
    })

  return (
    <table className="count">
      <thead>
        <tr className="count__title">
          <th>Note Category</th>
          <th>Active</th>
          <td>Archived</td>
        </tr>
      </thead>
      <tbody className="count-body">
        {numberOfTasksForCategory.map(({category, active, archived}) => <SummaryElement key={category} category={category} active={active} archived={archived}/>)}
      </tbody>
    </table>
  );
};

export default Summary;
