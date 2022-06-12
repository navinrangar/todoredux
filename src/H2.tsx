import React from "react";

function H2(props: any) {
  return (
    <>
      <h2 className="font-semibold text-2xl px-9 py-8"> {props.children} </h2>
    </>
  );
}

export default H2;
