import styles from "./TodoList.module.scss";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, checkTodo }) {
  return (
    <ul className={styles.todos}>
      {!todos.length && <li className={styles.noTodo}>Нет задач</li>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
