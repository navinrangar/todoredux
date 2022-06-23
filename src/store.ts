import { Reducer, createStore } from "redux";
import {} from "react";
import { TODO_ADD, TODO_STATUS_CHANGE } from "./actions/todos";
import { todoType } from "./models/todoType";
import { userType } from "./models/userType";
import { USER_ADD } from "./actions/users";

export type State = {
  todos: todoType[];
  users: userType[];
};

// const savedTodos= localStorage.getItem('todos');

const initialState: State = {
  todos: [],
  users: [],
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;

      const newTodos = state.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: done };
        }
        return t;
      });

      return { ...state, todos: newTodos };
    }

    case TODO_ADD: {
      const todo: todoType = action.payload;
      return { ...state, todos: [...state.todos, todo] };
    }

    case USER_ADD: {
      const user: userType = action.payload;
      return { ...state, users: [...state.users, user] };
    }

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
