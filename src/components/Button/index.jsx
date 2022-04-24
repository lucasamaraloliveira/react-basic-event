import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.btn} onClick={props.event}>
      {props.text}
    </button>
  );
};

export default Button;
