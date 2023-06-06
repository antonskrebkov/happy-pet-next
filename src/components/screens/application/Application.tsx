import React, { FC, useState } from "react";
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

const Application: FC = () => {
  const [sendNewApplication, { isLoading: isSending, isError, isSuccess }] =
    applicationsAPI.useSendNewApplicationMutation();

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
    <Layout title="Application">
      <main className={styles.application}>
        <div className={styles.container}>
          <button
            className={styles.backButton}
            type="button"
            onClick={() => router.back()}
          >
            Назад
          </button>
          <div className={styles.wrapper}>
            <form className={styles.form}>
              <div className={styles.formBox}>
                <h2 className={styles.formTitle}>
                  Введіть свої персональні дані:
                </h2>
                <ApplicationInput
                  value={application.firstName.trim()}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      firstName: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Імʼя"
                  isValid={validateString(application.firstName.trim())}
                  validationMessage="Введіть коректно своє імʼя"
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
                  placeholder="Прізвище"
                  isValid={validateString(application.surname.trim())}
                  validationMessage="Введіть коректно своє прізвище"
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
                  placeholder="Повних років"
                  isValid={validateAge(application.age.trim())}
                  validationMessage="Введіть коректно свій вік"
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
                  placeholder="Місто/Село"
                  isValid={validateString(application.city)}
                  validationMessage="Введіть коректно своє місто/cело"
                />
              </div>
              <div className={styles.formBox}>
                <h2 className={styles.formTitle}>
                  Введіть свої контактні дані:
                </h2>
                <ApplicationInput
                  value={application.email.trim()}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      email: e.target.value,
                    })
                  }
                  type="mail"
                  placeholder="Ел. пошта"
                  isValid={validateEmail(application.email.trim())}
                  validationMessage="Введіть коректно свою ел. пошту"
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
                  placeholder="Номер телефона"
                  isValid={validatePhone(application.phone.trim())}
                  validationMessage="Введіть коректно свій номер телефона"
                />
              </div>
              <label htmlFor="formPersonalData" className={styles.formCheckbox}>
                <input
                  id="formPersonalData"
                  type="checkbox"
                  checked={isAgree}
                  onChange={() => setIsAgree(!isAgree)}
                />
                <span>Я згоден на обробку моїх персональних даних</span>
              </label>
              <button
                className={
                  isAgree && isAllInputsValid && !isSending
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
                onClick={handleApplicationSubmit}
              >
                {isSending ? <DotsLoader /> : "Надіслати"}
              </button>
            </form>
            <section className={styles.order}>
              <h2 className={styles.orderTitle}>У вашій переносці:</h2>
              <ul className={styles.orderItems}>
                {cartList.map((cartItem) => (
                  <ApplicationItem key={cartItem.id} friend={cartItem} />
                ))}
              </ul>
              <div className={styles.orderTotal}>
                <div className={styles.orderTotalTitle}>Всього</div>
                <div className={styles.orderTotalPrice}>
                  {formatPrice(summarize(cartList))}
                </div>
              </div>
            </section>
          </div>
        </div>
        {isSuccess ? (
          <Modal>
            <h2 className={styles.modalTitle}>Ваша заявка прийнята!</h2>
            <Link href="/" className={styles.modalLink}>
              Повернутися на головну
            </Link>
          </Modal>
        ) : (
          ""
        )}
        {isError ? (
          <Modal>
            <h2 className={styles.modalTitle}>Щось пішло не так...</h2>
            <Link href="/" className={styles.modalLink}>
              Повернутися на головну
            </Link>
          </Modal>
        ) : (
          ""
        )}
      </main>
    </Layout>
  );
};

export default Application;
