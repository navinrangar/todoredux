import { Reducer, createStore } from "redux";
import {} from "react";
import { TODO_ADD, TODO_STATUS_CHANGE } from "./actions/todos";
import { todoType } from "./models/todoType";
import { userType } from "./models/userType";
import { USER_ADD } from "./actions/users";

import { initialUserState, userReducer, UserState } from "./states/users";
import { initialTodoState, todoReducer, TodoState } from "./states/todos";

export type State = {
  todos: TodoState;
  users: UserState;
};

// const savedTodos= localStorage.getItem('todos');

const initialState: State = {
  todos: initialTodoState,
  users: initialUserState,
};

const reducer: Reducer<State> = (state = initialState, action) => {
  return {
    todos: todoReducer(state.todos, action),
    users: userReducer(state.users, action),
  };
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
