import { FC } from "react";
import type { Category } from "types/todo";
import { getCategoryIcon } from "../lib/utils";

interface SummaryElementProps {
  category: Category;
  active: number;
  archived: number;
}

const SummaryElement: FC<SummaryElementProps> = ({ category, active, archived }) => {
  return (
    <tr className="count__item">
      <td>
        <div className="count__item__category-icon">
          <i className={getCategoryIcon(category)}></i>
        </div>
        {category}
      </td>
      <td>{active}</td>
      <td>{archived}</td>
    </tr>
  );
};

export default SummaryElement;
