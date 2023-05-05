import { FC } from "react";
import styles from "./ApplicationInput.module.scss";

interface ApplicationInputProps {
  type: string;
  value: string;
  validationMessage: string;
}

const ApplicationInput: FC<ApplicationInputProps> = ({
  type,
  value,
  validationMessage,
}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type={type} placeholder={value} />
      <div className={styles.inputLabel}>{value}</div>
      <div className={styles.inputValidation}>{validationMessage}</div>
    </div>
  );
};

export default ApplicationInput;
