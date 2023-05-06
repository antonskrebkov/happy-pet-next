import { FC, PropsWithChildren, useState, useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal: FC<PropsWithChildren> = ({ children }) => {
  const [menuShow, setMenuShow] = useState<boolean>(false);

  useEffect(() => {
    menuShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
    return function cleanup() {
      setMenuShow(false);
    };
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
