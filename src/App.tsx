import { FC } from "react";
import TodoRow from "./Components/TodoRow";

const todoObj = {
  id: 1,
  title: "goo kha",
  done: false,
};

const App: FC = () => {
  return <TodoRow todo={todoObj} />;
};

export default App;
