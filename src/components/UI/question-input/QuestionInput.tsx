import { FC, ChangeEvent, useState } from "react";
import styles from "./QuestionInput.module.scss";

interface QuestionInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  isValid: boolean;
  validationMessage: string;
}

const QuestionInput: FC<QuestionInputProps> = ({
  value,
  onChange,
  type,
  placeholder,
  isValid,
}) => {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <>
      <input
        type={type}
        className={
          isDirty && !isValid
            ? `${styles.questionsFormInput} ${styles.error}`
            : styles.questionsFormInput
        }
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={() => setIsDirty(true)}
      />
      <span className={styles.questionsFormLine}></span>
      {/* <div
        className={
          isDirty && !isValid
            ? `${styles.inputValidation} ${styles.error}`
            : styles.inputValidation
        }
      >
        {validationMessage}
      </div> */}
    </>
  );
};
export default QuestionInput;
