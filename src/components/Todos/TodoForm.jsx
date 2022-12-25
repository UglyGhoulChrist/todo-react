import { useState } from "react";
import styles from "./TodoForm.module.scss";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    text && addTodo(text);

    setText("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button />
    </form>
  );
}

export default TodoForm;
