import { FC, memo, useCallback } from "react";
import Checkbox from "./Checkbox";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { userType } from "../models/userType";
import cn from "classnames";

type userRowProps = {
  user: userType;
  onButtonClick: (name: string) => void;
};

// // onStatusChange= (id: number, done: boolean)=> void

const UserRow: FC<userRowProps> = ({ user, onButtonClick }) => {
  const { fName, lName } = user;
  //done, user, title, id, onDelete, onStatusChange

  const handleButtonClick = useCallback(() => {
    onButtonClick(fName);
  }, [fName]);

  const handleInputChange = (event: any) => {
    onButtonClick(event.target.value);
  };

  /* const onUserDelete = () => {
    onDelete(user, done);
  }; */

  /*
        <Checkbox checked={done} onChange={onCheckboxChange}></Checkbox>
      <p className={cn("ml-1 mr-2", {'line-through' :done})}>
        {title}
      </p>
      */

  /*   <div className="mt-1">
        <RiDeleteBin5Fill onClick={onUserDelete} />
      </div>
      */

  // <Checkbox checked={done} onChange={onCheckboxChange}></Checkbox>

  return (
    <div className="flex items-center" key="id">
      <input onChange={handleInputChange} placeholder="add a user" />
      <button onClick={handleButtonClick}> Add me!</button>
    </div>
  );
};

export default memo(UserRow);
