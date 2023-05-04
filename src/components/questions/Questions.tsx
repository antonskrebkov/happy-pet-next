import { FC, useState } from "react";
import Select from "react-select";
import styles from "./Questions.module.scss";

interface IConfirmation {
  isPersonalDataChecked: boolean;
  isPrivacyPolicyChecked: boolean;
}

const Questions: FC = () => {
  const [isSelectActive, setIsSelectActive] = useState(false);

  const [confirmation, setConfirmation] = useState<IConfirmation>({
    isPersonalDataChecked: false,
    isPrivacyPolicyChecked: false,
  });

  const options = [
    { value: "Тема 1", label: "Тема 1" },
    { value: "Тема 2", label: "Тема 2" },
    { value: "Тема 3", label: "Тема 3" },
    { value: "Тема 4", label: "Тема 4" },
  ];

  return (
    <section className={styles.questions}>
      <div className={styles.questionsContainer}>
        <h2 className={styles.questionsTitle}>Есть вопросы? Задавайте!</h2>
        <form action="#" className={styles.questionsForm}>
          <div className={styles.questionsFormColumn}>
            <div className={styles.questionsFormRow}>
              <div className={styles.questionsFormWrapper}>
                <input
                  type="text"
                  className={styles.questionsFormInput}
                  placeholder="Введите имя *"
                />
                <span className={styles.questionsFormLine}></span>
              </div>
              <div className={styles.questionsFormWrapper}>
                <input
                  type="email"
                  className={styles.questionsFormInput}
                  placeholder="Введите E-mail *"
                />
                <span className={styles.questionsFormLine}></span>
              </div>
            </div>
            <div className={styles.questionsFormRow}>
              <div className={styles.questionsFormWrapper}>
                <input
                  type="tel"
                  className={styles.questionsFormInput}
                  placeholder="Введите телефон *"
                />
                <span className={styles.questionsFormLine}></span>
              </div>
              <div className={styles.questionsFormWrapper}>
                <div
                  onClick={() => setIsSelectActive(!isSelectActive)}
                  className={styles.questionsFormSelect}
                >
                  <Select
                    styles={{
                      valueContainer: () => ({
                        display: "flex",
                        width: "100%",
                      }),
                      control: () => ({
                        width: "100%",
                        color: "#fff",
                        cursor: "pointer",
                        display: "flex",
                        height: "42px",
                        "@media (max-width: 570px)": {
                          height: "28px",
                        },
                      }),
                      singleValue: () => ({
                        color: "#fff",
                        fontSize: "18px",
                        "@media (max-width: 570px)": {
                          fontSize: "14px",
                        },
                      }),
                      indicatorSeparator: () => ({
                        display: "none",
                      }),
                      dropdownIndicator: () => ({
                        alignSelf: "flex-start",
                        color: "#fff",
                        width: "16px",
                        height: "22px",
                        boxSizing: "border-box",
                      }),
                      menuList: () => ({
                        height: "auto",
                        backgroundColor: "#000",
                        color: "#fff",
                      }),
                      option: () => ({
                        fontSize: "18px",
                        padding: "3px 0",
                        transition: "color .2s",
                        ":hover": {
                          color: "#f52456",
                        },
                        "@media (max-width: 570px)": {
                          fontSize: "14px",
                        },
                      }),
                    }}
                    options={options}
                    defaultValue={options[0]}
                    isSearchable={false}
                  ></Select>
                  <span
                    className={
                      isSelectActive
                        ? `${styles.questionsFormLine} ${styles.active}`
                        : styles.questionsFormLine
                    }
                  ></span>
                </div>
              </div>
            </div>
            <div className={styles.questionsFormRow}>
              <div
                className={`${styles.questionsFormWrapper} ${styles.questionsFormWrapperTextarea}`}
              >
                <textarea
                  name=""
                  id=""
                  className={styles.questionsFormMessage}
                  placeholder="Введите сообщение"
                ></textarea>
                <span className={styles.questionsFormLine}></span>
              </div>
            </div>
            <div
              className={`${styles.questionsFormRow} ${styles.questionsFormRowCb}`}
            >
              <label
                htmlFor="formPersonalData"
                className={styles.questionsFormCheckbox}
              >
                <input
                  id="formPersonalData"
                  type="checkbox"
                  className="required"
                  onChange={() =>
                    setConfirmation({
                      ...confirmation,
                      isPersonalDataChecked:
                        !confirmation.isPersonalDataChecked,
                    })
                  }
                  checked={confirmation.isPersonalDataChecked}
                />
                <span>Я согласен на обработку моих персональных данных</span>
              </label>
              <label
                htmlFor="formPrivacyPolicy"
                className={styles.questionsFormCheckbox}
              >
                <input
                  id="formPrivacyPolicy"
                  type="checkbox"
                  className="required"
                  onChange={() =>
                    setConfirmation({
                      ...confirmation,
                      isPrivacyPolicyChecked:
                        !confirmation.isPrivacyPolicyChecked,
                    })
                  }
                  checked={confirmation.isPrivacyPolicyChecked}
                />
                <span>
                  Я согласен с <a href="">Политикой конфиденциальности</a>
                </span>
              </label>
            </div>
          </div>
          <div className={styles.questionsFormColumn}>
            <button
              type="submit"
              className={styles.questionsFormButton}
            ></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Questions;
