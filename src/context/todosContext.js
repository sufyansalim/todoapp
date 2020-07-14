import React, { createContext} from "react";
import {useLocalStorageReducer} from "../reducer/useLocalStoarageReducer";
import todoReducer from "../reducer/todoReducer";

const defaultTodos = [
  { id: 1, task: "Feed the cat", completed: false },
  { id: 2, task: "Buy Groceries", completed: false },
  { id: 3, task: "Grow Beard", completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos",defaultTodos,todoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
