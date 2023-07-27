import { useState } from "react";
import { searchForDatesInContent } from "lib/utils";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { Todo } from "types/todo";
import {
  editTodo,
  selectEditedTodo,
  closeEditPopup,
} from "redux/todoSlice";
import { Category } from "types/todo";
import { RootState } from "redux/store";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { todoSchema } from "lib/validations/todo";
import * as z from "zod";

type Inputs = z.infer<typeof todoSchema>;


const PopupEdit = () => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state: RootState) => selectEditedTodo(state));

  const { id, category, content, created, createdInMilliseconds, name } =
    todo as Todo;

  const handleCloseEditTodo = () => {
    dispatch(closeEditPopup());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      name: name,
      content: content,
      category: category,
    },
  });

  const handleEditTodo = ({ name, content, category }: Inputs) => {
    dispatch(
      editTodo({
        id,
        category: category as Category,
        content: content,
        name: name,
        created,
        createdInMilliseconds,
      })
    );
    handleCloseEditTodo();
  };

  return (
    <div className="edit-pop-up pop-up">
      <button className="edit-exit-btn" onClick={handleCloseEditTodo}>
        <div className="edit-exit-btn__icon"></div>
      </button>
      <form
        className="pop-up-form"
        onSubmit={handleSubmit((data) => handleEditTodo(data))}
      >
        <div className="pop-up-field">
          <input
            {...register("name")}
            className="create-pop-up__name pop-up__name"
            placeholder="name"
          />
          {errors.name && (
            <span className="destructive">{errors.name.message}</span>
          )}
        </div>
        <select
          {...register("category")}
          id="create-categories"
          className="form__select"
        >
          <option value="task">Task</option>
          <option value="thought">Random thought</option>
          <option value="idea">Idea</option>
        </select>
        <div className="pop-up-field">
          <textarea
            {...register("content")}
            className="create-pop-up__comment pop-up__comment"
            typeof="comment"
            placeholder="Add Comments"
            rows={10}
          />
          {errors.content && (
            <span className="destructive">{errors.content.message}</span>
          )}
        </div>
        {<button className="create-save-btn">Edit</button>}
      </form>
    </div>
  );
};

export default PopupEdit;
