import style from "./TodoList.module.scss";
import st from "./Todo.module.scss";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className={style.todos}>
      {!todos.length && <li className={st.todo}>Todo List is empty</li>}
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} index={index} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
