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

const App: FC = () => {
  return (
    <div className="p-5">
      <H2 className="ml-4 mb-2"> Things to do </H2>
      <IncompleteTodoList />
      <TodoForm />
      <H2 className="ml-4"> Things to do </H2>
      <CompleteTodoList />
    </div>
  );
};

export default App;
