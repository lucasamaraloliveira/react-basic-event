import styles from "./Event.module.css";
import Button from "../Button";

const Event = () => {
  const firstEvent = () => {
    alert("Ativando primeiro evento!");
  };

  const secondEvent = () => {
    alert("Ativando segundo evento!");
  };

  return (
    <div className={styles.event}>
      <p>Clique para disparar um evento</p>

      <Button event={firstEvent} text="Primeiro Evento" />

      <Button event={secondEvent} text="Segundo Evento" />
    </div>
  );
};

export default Event;
