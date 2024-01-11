import { createContext, useReducer } from "react";
import {
  TAction,
  TTodo,
  TTodoContextValues,
  TTodoProviderProps,
} from "./TodoProvider.interface";

const initialState: TTodo[] = [
  { id: "213123", title: "Solve a problem in leetCode.", isCompleted: false },
];

const reducer = (currentState: typeof initialState, action: TAction) => {
  const { type, payload } = action;
  switch (type) {
    case "addTodo":
      return [...currentState, payload];
    case "deleteTodo":
      return [...currentState.filter((todo) => todo.id !== payload.id)];
    case "completeTodo":
      currentState.forEach((todo) => {
        if (todo.id === payload.id) {
          todo.isCompleted = true;
        }
      });
      return [...currentState];
    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TTodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = { state, dispatch };

  return <TodoContext.Provider value={values} children={children} />;
};

export const TodoContext = createContext<TTodoContextValues | undefined>(
  undefined
);
export default TodoProvider;
