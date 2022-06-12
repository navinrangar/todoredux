import React from "react";

function Header(props: any) {
  return (
    <div className="flex shadow font-bold px-5 py-5 justify-between">
      <span className={" text-2xl font-bold"}> {props.children} </span>

      <div>
        <input
          className="border rounded-md mr-3 border-gray-900"
          placeholder="  Your Name Please"
        />
        <button className="mr-12 border bg-yellow-100" type="submit">
          {" "}
          Go!{" "}
        </button>
      </div>
    </div>
  );
}

export default Header;
