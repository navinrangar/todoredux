import { FC, memo } from "react";
import { todoType } from "../models/todoType";
import {
  incompleteTodoSelector,
  completeTodoSelector,
} from "../selectors/todos";
import { State } from "../store";
import TodoRow from "./TodoRow";
import { connect, useDispatch } from "react-redux";
import { TODO_STATUS_CHANGE } from "../actions/actions";
import { todoStatusChangeAction } from "../actions/actions";

type TodoListProps = {
  todos: todoType[];
  onStatusChange: (id: number, done: boolean) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onStatusChange }) => {
  const dispatch = useDispatch();

  /* const handleStatusChange = (id: number, done: boolean) => {
    dispatch(todoStatusChangeAction( id, done ));
  }; */

  return (
    <>
      {todos.map((t) => (
        <TodoRow key={t.id} todo={t} onStatusChange={onStatusChange} />
      ))}
    </>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);

const incompleteTodoMapper = (s: State) => ({
  todos: incompleteTodoSelector(s),
});

const completeTodoMapper = (s: State) => ({
  todos: completeTodoSelector(s),
});

// connect() function only provides data from redux

const dispatchMapper = {
  onStatusChange: todoStatusChangeAction,
};

export const IncompleteTodoList = connect(
  incompleteTodoMapper,
  dispatchMapper
)(TodoList);

export const CompleteTodoList = connect(
  completeTodoMapper,
  dispatchMapper
)(TodoList);
