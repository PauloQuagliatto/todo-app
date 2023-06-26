import { useContext } from "react";
import { ref, child, get, set } from "firebase/database";

import { db } from "../services/firebase";
import { useAuth } from "./useAuth";
import { TodosContext } from "../contexts/TodosContext";

export function useTodos() {
  const { user } = useAuth();
  const { todos, setTodos } = useContext(TodosContext);

  function getTodos() {
    const dbRef = ref(db);
    get(child(dbRef, user!.uid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dbTodos = snapshot.val();
          const todosArray: string[] = Object.values(dbTodos);
          setTodos(todosArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addTodo(newTodo: string) {
    set(ref(db, user!.uid), {
      ...todos,
      [todos.length]: newTodo,
    })
      .then(() => {
        setTodos([...todos, newTodo]);
      })
      .catch((err) => console.log(err));
  }

  function deleteTodo(index: number) {
    const newTodos = todos.filter((_, i) => i !== index);
    const objNewTodos = newTodos.reduce((acc, curr, index) => {
      return {
        ...acc,
        [index]: curr,
      };
    }, {});
    set(ref(db, user!.uid), {
      ...objNewTodos,
    })
      .then(() => {
        setTodos(newTodos);
      })
      .catch((err) => console.log(err));
    setTodos(newTodos);
  }

  return {
    todos,
    getTodos,
    addTodo,
    deleteTodo,
  };
}
