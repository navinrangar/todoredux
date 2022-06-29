import { AnyAction, Reducer } from "redux";
import { TODO_ADD, TODO_STATUS_CHANGE } from "../actions/todos";
import { todoType } from "../models/todoType";

export type TodoState = {
  [id: number]: todoType;
};

export const initialTodoState = {};

export const todoReducer: Reducer<TodoState> = (
  todoState = initialTodoState,
  action: AnyAction
) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;

      return {
        ...todoState,
        [id]: { ...todoState[id], done },
      };
    }

    case TODO_ADD: {
      const todo: todoType = action.payload;
      return { ...todoState, [todo.id]: todo };
    }

    default:
      return todoState;
  }
};
