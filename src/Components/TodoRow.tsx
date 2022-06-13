import { FC, memo } from "react";
import Checkbox from "./Checkbox";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { todoType } from "../Models/todo";
import cn from "classnames";

type todoProps = {
  todo: todoType;
};

// // onStatusChange= (id: number, done: boolean)=> void

const TodoRow: FC<todoProps> = ({ todo }) => {
  const { done, title, id } = todo;
  //done, todo, title, id, onDelete, onStatusChange
  const onCheckboxChange = () => {
    // onStatusChange(todo);
  };

  /* const onTodoDelete = () => {
    onDelete(todo, done);
  }; */

  /*
        <Checkbox checked={done} onChange={onCheckboxChange}></Checkbox>
      <p className={cn("ml-1 mr-2", {'line-through' :done})}>
        {title}
      </p>
      */

  /*   <div className="mt-1">
        <RiDeleteBin5Fill onClick={onTodoDelete} />
      </div>
      */

  // <Checkbox checked={done} onChange={onCheckboxChange}></Checkbox>

  return (
    <div className="flex items-center" key="id">
      <Checkbox checked={done} onChange={onCheckboxChange}></Checkbox>
      <p className={cn("ml-1 mr-2", { "line-through": done })}>{title}</p>
    </div>
  );
};

export default memo(TodoRow);
