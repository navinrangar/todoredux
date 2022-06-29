import { FC, memo } from "react";
import { RiWindowsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <div className="font-bold text-3xl p-44 px-72">
        <li className="space-x-8 flex text-8xl">
          <Link to="/todos">
            <ul className="hover:text-sky-400"> Todos </ul>
          </Link>
          <Link to="/users">
            <ul className="hover:text-sky-400"> Users </ul>
          </Link>
        </li>
      </div>
    </>
  );
};

FrontPage.defaultProps = {};

export default memo(FrontPage);
