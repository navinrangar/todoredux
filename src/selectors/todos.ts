import { State } from "../store";
import { createSelector } from "reselect";

export const todoStateSelector = (s: State) => s.todos;

export const todoListSelector = createSelector(
  todoStateSelector,
  (todoState) =>
    Object.keys(todoState).map((todoId) => todoState[todoId as any])
  //ObjectToArray<todoType>(todoState)
);

export const completeTodoSelector = createSelector(todoListSelector, (todos) =>
  todos.filter((t) => t.done)
);

export const incompleteTodoSelector = createSelector(
  todoListSelector,
  (todos) => todos.filter((t) => !t.done)
);

/*

inefficient but simplest way of making selectors

export const todoListSelector = (s: State) =>
  Object.keys(s.todos).map((todoId) => s.todos[todoId as any]);

export const completeTodoSelector = (s: State) =>
  todoListSelector(s).filter((t) => t.done);

export const incompleteTodoSelector = (s: State) =>
  todoListSelector(s).filter((t) => !t.done);

  */
