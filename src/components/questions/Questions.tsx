import React, { FC, useState, useEffect } from "react";
import Select from "react-select";
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
import { IOption } from "@/interfaces/IOption";
import Modal from "../UI/modal/Modal";
import Link from "next/link";
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
                        onChange={(option: IOption) => {
                          setQuestion({
                            ...question,
                            topic: option.label,
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
                      placeholder={t("questions-input-message")}
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
      {isPrivacyPolicyShow ? (
        <Modal>
          <div className={styles.modalText}>
            <p>
              This Privacy Policy outlines how we collect, use, and protect the
              personal information of visitors to our animal shelter website. We
              are committed to ensuring the privacy and security of your
              personal information and comply with applicable data protection
              laws. By accessing and using our website, you consent to the terms
              of this Privacy Policy.
            </p>
            <ul>
              <li>
                Information We Collect:
                <ol>
                  <li>
                    Personal Information: When you interact with our website, we
                    may collect personal information such as your name, email
                    address, phone number, and address. This information is
                    voluntarily provided by you when you submit forms, make
                    donations, or contact us.
                  </li>
                  <li>
                    Non-Personal Information: We may also collect non-personal
                    information such as your IP address, browser type, and
                    device information. This information is collected
                    automatically through cookies and similar technologies to
                    enhance your browsing experience.
                  </li>
                </ol>
              </li>
              <li>
                Use of Information:
                <ol>
                  <li>
                    We use the personal information you provide to respond to
                    your inquiries, process donations, and provide updates about
                    our animal shelter activities.
                  </li>
                  <li>
                    Non-personal information is used to analyze website usage,
                    improve our website's functionality and content, and enhance
                    your overall experience.
                  </li>
                </ol>
              </li>
              <li>
                Sharing of Information:
                <ol>
                  <li>
                    We do not sell, rent, or disclose your personal information
                    to third parties without your consent, except as required by
                    law.
                  </li>
                  <li>
                    We may share your personal information with trusted service
                    providers who assist us in operating our website and
                    delivering our services. These providers are bound by
                    confidentiality obligations and are prohibited from using
                    your information for any other purpose.
                  </li>
                </ol>
              </li>
              <li>
                Data Security:
                <ol>
                  <li>
                    We implement appropriate security measures to protect your
                    personal information from unauthorized access, alteration,
                    or disclosure.
                  </li>
                  <li>
                    However, please note that no method of data transmission
                    over the internet or electronic storage is 100% secure, and
                    we cannot guarantee absolute security.
                  </li>
                </ol>
              </li>
              <li>
                Links to Third-Party Websites:
                <ol>
                  <li>
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    those websites. We encourage you to review the privacy
                    policies of those websites before providing any personal
                    information.
                  </li>
                </ol>
              </li>
              <li>
                Children's Privacy:
                <ol>
                  <li>
                    Our website is not intended for children under the age of
                    13. We do not knowingly collect personal information from
                    children. If we become aware that we have collected personal
                    information from a child without parental consent, we will
                    take steps to remove that information from our servers.
                  </li>
                </ol>
              </li>
              <li>
                Your Rights:
                <ol>
                  <li>
                    You have the right to access, update, and delete your
                    personal information held by us. If you wish to exercise any
                    of these rights or have any questions or concerns about our
                    privacy practices, please contact us using the contact
                    information provided below.
                  </li>
                </ol>
              </li>
              <li>
                Changes to this Privacy Policy:
                <ol>
                  <li>
                    We reserve the right to update or modify this Privacy Policy
                    at any time. Any changes will be effective immediately upon
                    posting the revised policy on our website. We encourage you
                    to review this policy periodically for any updates.
                  </li>
                </ol>
              </li>
              <li>
                Contact Us:
                <ol>
                  <li>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our privacy practices, please contact
                    us at:
                  </li>
                  <li>Name: Happy pet</li>
                  <li>Email: support@happypet.ua</li>
                  <li>Phone: +(38) 067 345 2774</li>
                  <li>Address: Fasova village, Kyiv region</li>
                </ol>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsPrivacyPolicyShow(false)}
            className={styles.modalButton}
          >
            Закрити
          </button>
        </Modal>
      ) : (
        ""
      )}
    </section>
  );
};

export default Questions;
