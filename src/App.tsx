import { FC, useState } from "react";
import H2 from "./components/H2";
import TodoRow from "./components/TodoRow";
import TodoList, {
  CompleteTodoList,
  IncompleteTodoList,
} from "./components/TodoList";
import { todoType } from "./models/todoType";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import { Routes, Route } from "react-router";
import TodoPage from "./components/TodoPage";
import UserPage from "./components/UserPage";
import { Link } from "react-router-dom";
import FrontPage from "./components/FrontPage";

const App: FC = () => {
  let [menu, showMenu] = useState(true);

  const path = window.location.href;
  if (path == "/") {
    showMenu(!menu);
  }

  return (
    <div>
      {menu && (
        <div className="p-5 font-bold text-3xl">
          <li className="space-x-3 flex">
            <Link to="/todos">
              <ul className="hover:text-sky-400"> Todos </ul>
            </Link>
            <Link to="/users">
              <ul className="hover:text-sky-400"> Users </ul>
            </Link>
          </li>
        </div>
      )}

      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </div>
  );
};

export default App;
