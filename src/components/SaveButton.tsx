import { useState } from "react";
import PopupCreate from "components/PopupCreate";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { openCreatePopup } from "redux/todoSlice";
import { RootState } from "redux/store";

const SaveButton = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(
    (state: RootState) => state.todos.popupCreateState
  );

  return (
    <>
      <button
        className="create-btn"
        onClick={() => dispatch(openCreatePopup())}
      >
        Create note
      </button>{" "}
      {isOpen && (
        <PopupCreate />
      )}
    </>
  );
};

export default SaveButton;
