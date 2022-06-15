import { Reducer, createStore } from "redux";
import {} from "react";
import { TODO_ADD, TODO_STATUS_CHANGE } from "./actions/actions";
import { todoType } from "./models/todoType";

export type State = {
  todos: todoType[];
};

// const savedTodos= localStorage.getItem('todos');

const initialState: State = {
  todos: [],
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

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
