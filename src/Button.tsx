import React from "react";

function Button(props: any) {
  let buttonDesign =
    "bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full";

  if (props.type === "save") {
    buttonDesign = "bg-yellow-600 p-2 text-blue rounded-md";
  } else if (props.type === "cancel") {
    buttonDesign =
      "bg-white p-2 text-black border border-black border-double rounded-lg";
  }

  return (
    <>
      <button
        onClick={props.onClick}
        className={"font-bold m-5 px-5 py-3  text-2xl " + buttonDesign}
      >
        {" "}
        {props.children}{" "}
      </button>
    </>
  );
}

export default Button;
