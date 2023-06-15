import { FC, ChangeEvent, useState } from "react";
import styles from "./QuestionInput.module.scss";

interface QuestionInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  isValid: boolean;
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
    </>
  );
};
export default QuestionInput;
