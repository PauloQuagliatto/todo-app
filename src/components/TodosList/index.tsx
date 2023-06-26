import { useEffect } from "react";
import { Trash } from "phosphor-react";

import { useTodos } from "../../hooks/useTodos";
import { List } from "./styles";
import { Button } from "../../styles/defaults/base-button";

export function TodosList() {
  const { todos, getTodos, deleteTodo } = useTodos();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {todos.length > 0 ? (
        <List>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <Button
                  buttonType="trashButton"
                  onClick={() => deleteTodo(index)}
                >
                  <Trash size={16} />
                </Button>
              </li>
            );
          })}
        </List>
      ) : null}
    </>
  );
}
