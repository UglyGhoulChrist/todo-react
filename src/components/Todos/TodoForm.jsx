import { useState } from "react";
import styles from "./TodoForm.module.scss";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    text && addTodo(text);
    setDisabled(true);
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        placeholder="Введите новую задачу"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setDisabled(!e.target.value);
        }}
      />
      <Button disabled={disabled}>Записать</Button>
    </form>
  );
}

export default TodoForm;
