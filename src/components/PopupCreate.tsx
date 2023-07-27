import { nanoid } from "nanoid";

import { FC, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTodo, closeCreatePopup } from "redux/todoSlice";
import { Category } from "types/todo";
import { getCreatedTimeToString, searchForDatesInContent } from "lib/utils";
import { useAppDispatch } from "hooks/redux";
import { useForm } from "react-hook-form";
import { todoSchema } from "lib/validations/todo";
import * as z from "zod";

type Inputs = z.infer<typeof todoSchema>;

const PopupCreate: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      name: "",
      content: "",
      category: "idea",
    },
  });

  const handleCreateTodo = ({ name, content, category }: Inputs) => {
    const newTodo = {
      id: nanoid(),
      category: category as Category,
      content: content,
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: name,
    };

    dispatch(addTodo(newTodo));
    dispatch(closeCreatePopup());
  };

  return (
    <div className="create-pop-up pop-up">
      <button
        className="create-exit-btn"
        onClick={() => dispatch(closeCreatePopup())}
      >
        <div className="create-exit-btn__icon"></div>
      </button>
      <form
        className="pop-up-form"
        onSubmit={handleSubmit((data) => handleCreateTodo(data))}
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
          className="form__select"
          id="create-categories"
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
        {<button className="create-save-btn">Save</button>}
      </form>
    </div>
  );
};

export default PopupCreate;
