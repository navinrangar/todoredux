import React from "react";

function Input(props: any) {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      className="w-96 border border-black"
      placeholder={props.placeholder}
    />
  );
}

export default Input;
