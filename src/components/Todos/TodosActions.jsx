import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.scss";
function TodosActions({
  onClickReset,
  onClickClearCompleted,
  completedTodoCount,
}) {
  return (
    <div className={styles.buttons}>
      <Button onClick={onClickReset} title="Удалить все задачи">
        <RiDeleteBin2Line />
      </Button>

      <Button
        disabled={completedTodoCount === 0}
        title="Удалить завершённые задачи"
      >
        <RiRefreshLine onClick={onClickClearCompleted} />
      </Button>
    </div>
  );
}

export default TodosActions;
