import { FC, memo } from "react";
import Checkbox from "./Checkbox";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { todoType } from "./models/todo";

type todoProps = {
  todo: todoType;
};

const TodoRow: FC<todoProps> = ({ done, todo, onDelete, onStatusChange }) => {
  const onCheckboxChange = () => {
    onStatusChange(todo);
  };

  const onTodoDelete = () => {
    onDelete(todo, done);
  };

  return (
    <div className="flex ml-5 pb-1">
      <Checkbox checked={done} onChange={onCheckboxChange}></Checkbox>
      <span className={"ml-1 mr-2 " + (done && "line-through")}>
        {todo.title}
      </span>

      <div className="mt-1">
        <RiDeleteBin5Fill onClick={onTodoDelete} />
      </div>
    </div>
  );
};

export default memo(TodoRow);
