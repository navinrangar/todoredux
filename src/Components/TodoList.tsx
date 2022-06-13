import { FC, memo } from "react";
import { todoType } from "../Models/todoType";
import TodoRow from "./TodoRow";

type TodoListProps = {
  todos: todoType[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map((t) => (
        <TodoRow key={t.id} todo={t} />
      ))}
    </>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);
