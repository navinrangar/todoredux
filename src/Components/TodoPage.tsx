import { FC, memo } from "react";
import { Link } from "react-router-dom";
import H2 from "./H2";
import TodoForm from "./TodoForm";
import { IncompleteTodoList, CompleteTodoList } from "./TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = (props) => {
  return (
    <>
      <div className="p-5">
        <H2 className="ml-4 mb-2"> Things to do </H2>
        <IncompleteTodoList />
        <TodoForm />
        <H2 className="ml-4"> Things done! </H2>
        <CompleteTodoList />
        <Link to="/"> Go Home!</Link>
      </div>
    </>
  );
};

TodoPage.defaultProps = {};

export default memo(TodoPage);
