import { FC, memo } from "react";
import H2 from "./H2";
import TodoForm from "./TodoForm";
import { IncompleteTodoList, CompleteTodoList } from "./TodoList";

type UserPageProps = {};

const UserPage: FC<UserPageProps> = (props) => {
  return (
    <>
      <div className="p-5">
        <H2 className="ml-4 mb-2"> Things to do </H2>
        <IncompleteTodoList />
        <TodoForm />
        <H2 className="ml-4"> Things done! </H2>
        <CompleteTodoList />
      </div>
    </>
  );
};

UserPage.defaultProps = {};

export default memo(UserPage);
