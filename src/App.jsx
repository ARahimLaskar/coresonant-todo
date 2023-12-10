import "./App.css";
import { AddTask } from "./components/AddTask";
import { TodoList } from "./components/TodoList";
import { Heading } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Heading pb="10">Todo App</Heading>
      <AddTask />
      <TodoList />
    </>
  );
}

export default App;
