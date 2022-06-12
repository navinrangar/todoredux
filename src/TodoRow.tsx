import React from "react";
import Checkbox from "./Checkbox";
import { RiDeleteBin5Fill } from "react-icons/ri";

function TodoRow(props: any) {
  const onCheckboxChange = () => {
    props.onStatusChange(props.todo);
  };

  const onTodoDelete = () => {
    props.onDelete(props.todo, props.done);
  };

  return (
    <div className="flex ml-5 pb-1">
      <Checkbox checked={props.done} onChange={onCheckboxChange}>
        {" "}
      </Checkbox>
      <span className={"ml-1 mr-2 " + (props.done && "line-through")}>
        {" "}
        {props.todo.title}{" "}
      </span>

      <div className="mt-1">
        {" "}
        <RiDeleteBin5Fill onClick={onTodoDelete} />{" "}
      </div>
    </div>
  );
}

export default TodoRow;
