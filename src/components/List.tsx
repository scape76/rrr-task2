import { RootState } from "../redux/store";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import ListElement from "./ListElement";
import {
  selectActiveTodos,
  archiveTodos,
  deleteTodos,
} from "../redux/todoSlice";

const List = () => {
  const dispatch = useAppDispatch();
  const activeElementsList = useAppSelector((state: RootState) =>
    selectActiveTodos(state)
  );

  return (
    <div className="table-scroll">
      <table className="active">
        <thead>
          <tr className="active__title">
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th>
              <button className="title__unarch-btn btn">
                <i
                  className="fa-solid fa-box-archive"
                  onClick={() => dispatch(archiveTodos())}
                ></i>
              </button>
              <button className="title__del-btn btn">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => dispatch(deleteTodos())}
                ></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="active-body">
          {activeElementsList?.map(({ id, ...props }) => {
            return <ListElement key={id} {...props} id={id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
