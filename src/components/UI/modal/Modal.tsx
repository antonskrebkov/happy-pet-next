import { FC, PropsWithChildren, useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal: FC<PropsWithChildren> = ({ children }) => {
  const menuShow = false;

  useEffect(() => {
    menuShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [menuShow]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
