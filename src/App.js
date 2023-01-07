import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";
import { endingWord } from "./utils/utils.js";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };
  const resetTodosHandler = () => {
    setTodos([]);
  };
  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const completedTodo = todos.filter((todo) => todo.isCompleted);
  const completedTodoCount = completedTodo.length;
  return (
    <main className="App">
      <h1 className="h1">Список задач</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          onClickReset={resetTodosHandler}
          onClickClearCompleted={clearCompletedTodosHandler}
          completedTodoCount={completedTodoCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        checkTodo={toggleTodoHandler}
      />
      {!!completedTodoCount && (
        <h2>
          Завершённых {completedTodoCount} задач{endingWord(completedTodoCount)}
        </h2>
      )}
    </main>
  );
}

export default App;
