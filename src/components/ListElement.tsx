import { FC } from "react";
import type { Todo } from "../types/todo";
import { removeTodo, archiveTodo, openEditPopup } from "../redux/todoSlice";
import { useAppDispatch } from "../hooks/redux";
import { getCategoryIcon, searchForDatesInContent } from "../lib/utils";

const ListElement: FC<Todo> = (todo) => {
  const dispatch = useAppDispatch();
  const { id, category, content, created, name } = todo;

  return (
    <tr className="active__item">
      <td>
        <div className="active__item__category-icon">
          <i className={getCategoryIcon(category)}></i>
        </div>
        {name}
      </td>
      <td>{created}</td>
      <td>{category}</td>
      <td>{content}</td>
      <td>{searchForDatesInContent(content)} </td>
      <td>
        <button
          className="active__item__button-edit btn"
          onClick={() => dispatch(openEditPopup(todo))}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
        <button
          className="active__item__button-arch btn"
          onClick={() => dispatch(archiveTodo(todo))}
        >
          <i className="fa-solid fa-box-archive"></i>
        </button>
        <button
          className="active__item__button-del btn"
          onClick={() => dispatch(removeTodo(id))}
        >
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </td>
    </tr>
  );
};

export default ListElement;
