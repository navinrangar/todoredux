import React from "react";
import Header from "./Header";
import H1 from "./H1";
import H2 from "./H2";
import Button from "./Button";
import TodoForm from "./TodoForm";
import TodoRow from "./TodoRow";

let i = localStorage.getItem("id_index") || 0;

function TodoPage() {
  const [showTodoForm, updateTodoForm] = React.useState(false);

  // const savedTodoList = JSON.parse(localStorage.getItem("todoList")) || [];

  const [todoList, updateTodoList] = React.useState<any>([]);

  console.log("todolist", todoList);

  const completeTodoList = todoList.filter((t: any) => t.done);

  const incompleteTodoList = todoList.filter((t: any) => !t.done);

  console.log("todolist", todoList);

  function setTodoForm() {
    updateTodoForm(true);
  }

  function hideTodoForm() {
    updateTodoForm(false);
  }

  const addTodo = (todoTitle: any) => {
    // if(todoList.indexOf(todo)=== -1){
    // localStorage.setItem("id_index", ++i):;
    if (todoTitle === "") return;
    const newTodoList = [...todoList, { title: todoTitle, id: i, done: false }];

    updateTodoList(newTodoList);

    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  //todolist and donelist function area

  const markAsDone = (todo: any) => {
    todo.done = true;
    const newTodoList = [...todoList];
    updateTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  const markAsNotDone = (todo: any) => {
    todo.done = false;
    const newTodoList = [...todoList];
    updateTodoList(newTodoList);
    // localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  const onTodoDelete = (todo: any) => {
    const newTodoList = todoList.filter((t: any) => t.id !== todo.id);
    // localStorage.setItem('todoList', JSON.stringify(newTodoList));
    updateTodoList(newTodoList);
  };

  return (
    <div className="px-7 py-6">
      <Header> Navin's Todo </Header>
      <H1> Things to get done </H1>
      <H2> Things to do </H2>

      {!incompleteTodoList.length && (
        <div className="ml-9 mb-4"> No todos here!</div>
      )}

      {incompleteTodoList.map((t: any) => (
        <TodoRow
          todo={t}
          key={t.id}
          done={false}
          onStatusChange={markAsDone}
          onDelete={onTodoDelete}
        />
      ))}

      {!showTodoForm && <Button onClick={setTodoForm}> + Add a Task </Button>}

      {showTodoForm && <TodoForm onClose={hideTodoForm} onCreate={addTodo} />}

      {completeTodoList.length > 0 && <H2> Things done </H2>}

      {!completeTodoList.length && (
        <div className="ml-9"> Nothing done yet!</div>
      )}

      {completeTodoList.map((t: any) => (
        <TodoRow
          todo={t}
          key={t.id}
          done={true}
          onStatusChange={markAsNotDone}
          onDelete={onTodoDelete}
        >
          {" "}
        </TodoRow>
      ))}
    </div>
  );
}

export default TodoPage;
