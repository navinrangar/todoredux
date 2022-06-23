export const TODO_ADD = "added new todo";
export const TODO_STATUS_CHANGE = "changed todo status";
export const TODO_DELETE = "deleted existing todo";

let nextId = 0;

export const todoAddAction = (todoText: string) => {
  return {
    type: TODO_ADD,
    payload: { id: ++nextId, title: todoText, done: false },
  };
};

export const todoStatusChangeAction = (todoId: number, newStatus: boolean) => {
  return { type: TODO_STATUS_CHANGE, payload: { id: todoId, done: newStatus } };
};

//export const todoDeleteAction = ()
