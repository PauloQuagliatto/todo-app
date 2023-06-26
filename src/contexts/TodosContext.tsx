import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TodosContextProps = {
  todos: string[];
  setTodos: Dispatch<SetStateAction<string[]>>;
};

export const TodosContext = createContext({} as TodosContextProps);

type TodosProviderProps = {
  children: ReactNode;
};

export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
