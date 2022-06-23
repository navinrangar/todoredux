import { FC } from "react";
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

const App: FC = () => {
  return (
    <>
      <div className="p-5 font-bold text-3xl">
        <li className="space-x-3 flex">
          <Link to="/">
            <ul> Todos </ul>
          </Link>
          <Link to="/users">
            <ul> Users </ul>
          </Link>
        </li>
      </div>
      <Routes>
        <Route index element={<TodoPage />} />
      </Routes>
    </>
  );
};

export default App;
