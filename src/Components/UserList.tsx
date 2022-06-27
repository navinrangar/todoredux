import { FC, memo } from "react";
import { userType } from "../models/userType";
import { State } from "../store";
import { connect, useDispatch } from "react-redux";
import { userAddAction, USER_ADD } from "../actions/users";
import { userListSelector } from "../selectors/users";
import H2 from "./H2";

type UserListProps = {
  users: userType[];
};

const UserList: FC<UserListProps> = ({ users }) => {
  // const dispatch = useDispatch();

  /* const handleStatusChange = (id: number, done: boolean) => {
    dispatch(userStatusChangeAction( id, done ));
  }; */

  return (
    <div className="mt-4">
      <H2 className="p-4 text-4xl bg-gray-400"> User List </H2>
      {users.map((u) => (
        <div className="border p-2 flex bg-gray-200 space-x-6 mt-2">
          <p className="text-3xl border border-solid border-black px-2">
            {u.id}
          </p>
          <p className="text-3xl"> {u.fName} </p>
          <p className="text-3xl"> {u.lName} </p>
        </div>
      ))}
    </div>
  );
};

UserList.defaultProps = {};

export default memo(UserList);

const mapStateToProps = (s: State) => ({
  users: userListSelector(s),
});

// connect() function only provides data from redux

export const FullUserList = connect(mapStateToProps)(UserList);
