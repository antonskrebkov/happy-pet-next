import React, { FC, useState } from "react";
import Select, { SingleValue } from "react-select";
import styles from "./Questions.module.scss";
import { IQuestion } from "@/interfaces/IQuestion";
import { questionsAPI } from "@/services/Questions.service";
import { formatDate } from "@/utils/date";
import {
  validateString,
  validateEmail,
  validatePhone,
} from "@/utils/validation";
import QuestionInput from "../UI/question-input/QuestionInput";
import { IDefaultOption } from "@/interfaces/IDefaultOption";
import Modal from "../UI/modal/Modal";
import DotsLoader from "../UI/dots-loader/DotsLoader";
import arrowRight from "public/arrow-button.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface IConfirmation {
  isPersonalDataChecked: boolean;
  isPrivacyPolicyChecked: boolean;
}

const Questions: FC = () => {
  const { t } = useTranslation("questions");

  const [sendNewQuestion, { isLoading: isSending, isError, isSuccess }] =
    questionsAPI.useSendNewQuestionMutation();

  const [isPrivacyPolicyShow, setIsPrivacyPolicyShow] =
    useState<boolean>(false);

  const [isSelectActive, setIsSelectActive] = useState(false);

  const [isConfirmed, setIsConfirmed] = useState<IConfirmation>({
    isPersonalDataChecked: false,
    isPrivacyPolicyChecked: false,
  });

  const options = [
    { value: "FirstTopic", label: t("questions-theme-1") },
    { value: "SecondTopic", label: t("questions-theme-2") },
    { value: "ThirdTopic", label: t("questions-theme-3") },
  ];

  const [question, setQuestion] = useState<IQuestion>({
    name: "",
    email: "",
    phone: "",
    topic: options[0].label,
    message: "",
  } as IQuestion);

  const isAllInputsValid =
    validateString(question.name) &&
    validateEmail(question.email) &&
    validatePhone(question.phone) &&
    question.message !== "";

  const handleQuestionSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await sendNewQuestion({
      ...question,
      date: formatDate(new Date(Date.now())),
    }).then(() => {
      setQuestion({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      } as IQuestion);
    });
  };

  const handlePrivacyPolicyShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPrivacyPolicyShow(true);
  };

  return (
    <section className={styles.questions}>
      <div className={styles.questionsContainer}>
        {isSuccess ? (
          <h1 className={styles.questionsSuccess}>
            Question is successfully submitted!
          </h1>
        ) : (
          <>
            <h2 className={styles.questionsTitle}>{t("questions-title")}</h2>
            <form action="#" className={styles.questionsForm}>
              <div className={styles.questionsFormColumn}>
                <div className={styles.questionsFormRow}>
                  <div className={styles.questionsFormWrapper}>
                    <QuestionInput
                      type="text"
                      value={question.name}
                      onChange={(e) =>
                        setQuestion({
                          ...question,
                          name: e.target.value,
                        })
                      }
                      placeholder={t("questions-input-name")}
                      isValid={validateString(question.name)}
                    />
                  </div>
                  <div className={styles.questionsFormWrapper}>
                    <QuestionInput
                      type="email"
                      value={question.email}
                      onChange={(e) =>
                        setQuestion({
                          ...question,
                          email: e.target.value,
                        })
                      }
                      placeholder={t("questions-input-email")}
                      isValid={validateEmail(question.email)}
                    />
                  </div>
                </div>
                <div className={styles.questionsFormRow}>
                  <div className={styles.questionsFormWrapper}>
                    <QuestionInput
                      type="tel"
                      value={question.phone}
                      onChange={(e) =>
                        setQuestion({
                          ...question,
                          phone: e.target.value,
                        })
                      }
                      placeholder={t("questions-input-phone")}
                      isValid={validatePhone(question.phone)}
                    />
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
                        onChange={(option: SingleValue<IDefaultOption>) => {
                          setQuestion({
                            ...question,
                            topic: option!.label,
                          });
                        }}
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
                      value={question.message}
                      onChange={(e) =>
                        setQuestion({
                          ...question,
                          message: e.target.value,
                        })
                      }
                      placeholder={`${t("questions-input-message")}`}
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
                        setIsConfirmed({
                          ...isConfirmed,
                          isPersonalDataChecked:
                            !isConfirmed.isPersonalDataChecked,
                        })
                      }
                      checked={isConfirmed.isPersonalDataChecked}
                    />
                    <span>{t("questions-personal-data")}</span>
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
                        setIsConfirmed({
                          ...isConfirmed,
                          isPrivacyPolicyChecked:
                            !isConfirmed.isPrivacyPolicyChecked,
                        })
                      }
                      checked={isConfirmed.isPrivacyPolicyChecked}
                    />
                    <span>
                      {t("questions-privacy-policy-1")}

                      <button
                        className={styles.questionsFormPrivacyPolicy}
                        onClick={handlePrivacyPolicyShow}
                      >
                        {t("questions-privacy-policy-2")}
                      </button>
                    </span>
                  </label>
                </div>
              </div>
              <div className={styles.questionsFormColumn}>
                <button
                  onClick={handleQuestionSubmit}
                  className={
                    isConfirmed.isPersonalDataChecked &&
                    isConfirmed.isPrivacyPolicyChecked &&
                    isAllInputsValid &&
                    !isSending
                      ? `${styles.questionsFormButton} ${styles.active}`
                      : styles.questionsFormButton
                  }
                >
                  {isSending ? (
                    <DotsLoader />
                  ) : (
                    <Image src={arrowRight} alt="" />
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      {isPrivacyPolicyShow && (
        <Modal>
          <div className={styles.modalText}>
            <p>{t("modal-text-0")}</p>
            <ul>
              <li>
                {t("modal-title-1")}
                <ol>
                  <li>{t("modal-text-1-1")}</li>
                  <li>{t("modal-text-1-2")}</li>
                </ol>
              </li>
              <li>
                {t("modal-title-2")}
                <ol>
                  <li>{t("modal-text-2-1")}</li>
                  <li>{t("modal-text-2-2")}</li>
                </ol>
              </li>
              <li>
                {t("modal-title-3")}
                <ol>
                  <li>{t("modal-text-3-1")}</li>
                  <li>{t("modal-text-3-2")}</li>
                </ol>
              </li>
              <li>
                {t("modal-title-4")}
                <ol>
                  <li>{t("modal-text-4-1")}</li>
                  <li>{t("modal-text-4-2")}</li>
                </ol>
              </li>
              <li>
                {t("modal-title-5")}
                <ol>
                  <li>{t("modal-text-5")}</li>
                </ol>
              </li>
              <li>
                {t("modal-title-6")}
                <ol>
                  <li>{t("modal-text-6")}</li>
                </ol>
              </li>
              <li>
                {t("modal-title-7")}
                <ol>
                  <li>{t("modal-text-7")}</li>
                </ol>
              </li>
              <li>
                {t("modal-title-8")}
                <ol>
                  <li>{t("modal-text-8")}</li>
                </ol>
              </li>
              <li>
                {t("modal-title-9")}
                <ol>
                  <li>{t("modal-text-9-1")}</li>
                  <li>{t("modal-text-9-2")}</li>
                  <li>{t("modal-text-9-3")}</li>
                  <li>{t("modal-text-9-4")}</li>
                  <li>{t("modal-text-9-5")}</li>
                </ol>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsPrivacyPolicyShow(false)}
            className={styles.modalButton}
          >
            {t("modal-button")}
          </button>
        </Modal>
      )}
    </section>
  );
};

export default Questions;
