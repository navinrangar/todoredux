import React from "react";

function Checkbox(props: any) {
  return (
    <>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        className={
          "font-bold mt-1 w-6 h-4 text-3xl focus:ring-yellow-300 ring-1 "
        }
      />
    </>
  );
}

export default Checkbox;
