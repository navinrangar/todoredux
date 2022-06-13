import { FC } from "react";
import H2 from "./Components/H2";
import TodoRow from "./Components/TodoRow";
import TodoList from "./Components/TodoList";
const todoObj = [
  { id: 1, title: "goo kha", done: false },

  { id: 1, title: "hag le", done: false },
];

const App: FC = () => {
  return (
    <div className="p-5">
      <H2 className="ml-4 mb-2"> Things to do </H2>
      <TodoList todos={todoObj} />
      <H2 className="ml-4"> Things to do </H2>
      <TodoList todos={todoObj} />
    </div>
  );
};

export default App;
