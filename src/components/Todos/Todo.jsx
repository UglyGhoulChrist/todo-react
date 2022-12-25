import { RiTodoFill } from "react-icons/ri";
import styles from "./Todo.module.scss";

function Todo({ todo, index, deleteTodo }) {
  return (
    <li className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.icon} />
      <div className={styles.text}>{todo}</div>
    </li>
  );
}

export default Todo;
