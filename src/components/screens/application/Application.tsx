import { FC, useState } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Application.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import ApplicationInput from "@/components/UI/application-input/ApplicationInput";
import Modal from "@/components/UI/modal/Modal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IApplication } from "@/interfaces/IApplication";
import ApplicationItem from "@/components/application-item/ApplicationItem";
import { applicationsAPI } from "@/services/Applications.service";
import { cleanCart } from "@/store/slices/cartSlice";
import { summarize } from "@/utils/sum";
import { formatDate } from "@/utils/date";
import { formatPrice } from "@/utils/price";
import {
  validateString,
  validateAge,
  validateEmail,
  validatePhone,
} from "@/utils/validation";
import DotsLoader from "@/components/UI/dots-loader/DotsLoader";
import { useTranslation } from "next-i18next";

const Application: FC = () => {
  const [sendNewApplication, { isLoading: isSending, isError, isSuccess }] =
    applicationsAPI.useSendNewApplicationMutation();

  const { t } = useTranslation("application");

  const router = useRouter();

  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cart);

  const [application, setApplication] = useState<IApplication>({
    firstName: "",
    surname: "",
    age: "",
    city: "",
    email: "",
    phone: "",
    sum: summarize(cartList),
    friends: cartList,
  } as IApplication);

  const isAllInputsValid =
    validateString(application.firstName) &&
    validateString(application.surname) &&
    validateAge(application.age) &&
    validateString(application.city) &&
    validateEmail(application.email) &&
    validatePhone(application.phone);

  const [isAgree, setIsAgree] = useState<boolean>(false);
  const handleApplicationSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await sendNewApplication({
      ...application,
      date: formatDate(new Date(Date.now())),
    }).then(() => {
      dispatch(cleanCart());
    });
  };

  return (
    <Layout title={t("title")}>
      <main className={styles.application}>
        <div className={styles.container}>
          <button
            className={styles.backButton}
            type="button"
            onClick={() => router.back()}
          >
            {t("back")}
          </button>
          <div className={styles.wrapper}>
            <form className={styles.form}>
              <div className={styles.formBox}>
                <h2 className={styles.formTitle}>{t("form-title-1")}</h2>
                <ApplicationInput
                  value={application.firstName.trim()}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      firstName: e.target.value,
                    })
                  }
                  type="text"
                  placeholder={t("input-name-placeholder")}
                  isValid={validateString(application.firstName.trim())}
                  validationMessage={t("input-name-validation")}
                />
                <ApplicationInput
                  value={application.surname.trim()}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      surname: e.target.value,
                    })
                  }
                  type="text"
                  placeholder={t("input-surname-placeholder")}
                  isValid={validateString(application.surname.trim())}
                  validationMessage={t("input-surname-validation")}
                />
                <ApplicationInput
                  value={application.age.trim()}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      age: e.target.value,
                    })
                  }
                  type="string"
                  placeholder={t("input-age-placeholder")}
                  isValid={validateAge(application.age.trim())}
                  validationMessage={t("input-age-validation")}
                />
                <ApplicationInput
                  value={application.city}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      city: e.target.value,
                    })
                  }
                  type="text"
                  placeholder={t("input-city-placeholder")}
                  isValid={validateString(application.city)}
                  validationMessage={t("input-city-validation")}
                />
              </div>
              <div className={styles.formBox}>
                <h2 className={styles.formTitle}>{t("form-title-2")}</h2>
                <ApplicationInput
                  value={application.email.trim()}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      email: e.target.value,
                    })
                  }
                  type="mail"
                  placeholder={t("input-mail-placeholder")}
                  isValid={validateEmail(application.email.trim())}
                  validationMessage={t("input-mail-validation")}
                />
                <ApplicationInput
                  value={application.phone.trim()}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      phone: e.target.value,
                    })
                  }
                  type="tel"
                  placeholder={t("input-phone-placeholder")}
                  isValid={validatePhone(application.phone.trim())}
                  validationMessage={t("input-phone-validation")}
                />
              </div>
              <label htmlFor="formPersonalData" className={styles.formCheckbox}>
                <input
                  id="formPersonalData"
                  type="checkbox"
                  checked={isAgree}
                  onChange={() => setIsAgree(!isAgree)}
                />
                <span>{t("form-personal-data")}</span>
              </label>
              <button
                className={
                  isAgree && isAllInputsValid && !isSending
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
                onClick={handleApplicationSubmit}
              >
                {isSending ? <DotsLoader /> : t("form-button")}
              </button>
            </form>
            <section className={styles.order}>
              <h2 className={styles.orderTitle}>{t("order-title")}</h2>
              <ul className={styles.orderItems}>
                {cartList.map((cartItem) => (
                  <ApplicationItem
                    key={cartItem.id}
                    friend={cartItem}
                    locale={router.locale}
                  />
                ))}
              </ul>
              <div className={styles.orderTotal}>
                <div className={styles.orderTotalTitle}>
                  {t("order-total-title")}
                </div>
                <div className={styles.orderTotalPrice}>
                  {formatPrice(summarize(cartList), router.locale)}
                </div>
              </div>
            </section>
          </div>
        </div>
        {isSuccess && (
          <Modal>
            <h2 className={styles.modalTitle}>{t("modal-success")}</h2>
            <Link href="/" className={styles.modalLink}>
              {t("modal-link")}
            </Link>
          </Modal>
        )}
        {isError && (
          <Modal>
            <h2 className={styles.modalTitle}>{t("modal-error")}</h2>
            <Link href="/" className={styles.modalLink}>
              {t("modal-link")}
            </Link>
          </Modal>
        )}
      </main>
    </Layout>
  );
};

export default Application;
