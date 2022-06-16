import React from "react";
import AllTodoList from "./components/AllTodoList";
import TodoForm from "./components/TodoForm";
import { Container, Header } from "./shared/style/Todo.styled";

function TodoPage() {
  return (
    <>
      <Container>
        <Header>Todos</Header>
        <TodoForm />
        <AllTodoList />
      </Container>
    </>
  );
}

export default TodoPage;
