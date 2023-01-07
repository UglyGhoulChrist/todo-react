import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.scss";

function Todo({ todo, deleteTodo, checkTodo }) {
  return (
    <li
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.icon} />
      <div className={styles.text}>{todo.text}</div>
      <RiDeleteBin2Line
        title="Удалить задачу"
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        title={todo.isCompleted ? "Возобновитьзадачу" : "Завершить задачу"}
        className={styles.checkIcon}
        onClick={() => checkTodo(todo.id)}
      />
    </li>
  );
}

export default Todo;
