import { FC, ChangeEvent, useState } from "react";
import styles from "./ApplicationInput.module.scss";

interface ApplicationInputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  isValid: boolean;
  validationMessage: string;
}

const ApplicationInput: FC<ApplicationInputProps> = ({
  value,
  onChange,
  type,
  placeholder,
  isValid,
  validationMessage,
}) => {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={() => setIsDirty(true)}
      />
      <div className={styles.inputLabel}>{placeholder}</div>
      <div
        className={
          isDirty && !isValid
            ? `${styles.inputValidation} ${styles.error}`
            : styles.inputValidation
        }
      >
        {validationMessage}
      </div>
    </div>
  );
};

export default ApplicationInput;
