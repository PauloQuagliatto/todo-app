import { TodoForm } from "../../components/TodoForm";
import { TodosList } from "../../components/TodosList";
import { TodosProvider } from "../../contexts/TodosContext";

import { TodosPageContainer } from "./styles";

export function TodosPage() {
  return (
    <TodosPageContainer>
      <TodosProvider>
        <TodoForm />
        <TodosList />
      </TodosProvider>
    </TodosPageContainer>
  );
}
