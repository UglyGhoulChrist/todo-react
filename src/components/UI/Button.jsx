import styles from "./Button.module.scss";

function Button({ onClick, children, title, disabled = false }) {
  return (
    <button
      title={title}
      className={styles.button}
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
