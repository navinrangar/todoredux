import { FC, memo } from "react";
import { Link } from "react-router-dom";
import H2 from "./H2";
import TodoForm from "./TodoForm";
import { IncompleteTodoList, CompleteTodoList } from "./TodoList";
import UserForm from "./UserForm";
import { FullUserList } from "./UserList";

type UserPageProps = {};

const UserPage: FC<UserPageProps> = (props) => {
  return (
    <>
      <div className="p-5">
        <UserForm />
        <FullUserList></FullUserList>
        <Link to="/"> Go Home!</Link>
      </div>
    </>
  );
};

UserPage.defaultProps = {};

export default memo(UserPage);
