import React from "react";

function H1(props: any) {
  return (
    <>
      <h1 className="font-bold px-9 pb-4 pt-8 text-3xl"> {props.children} </h1>
    </>
  );
}

export default H1;
