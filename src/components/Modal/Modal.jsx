import style from "./Modal.module.scss";
import { IoClose } from "react-icons/io5";

export const Modal = ({ handleModal, isModalOpen, children, topPos }) => {
  return (
    <>
      {isModalOpen && (
        <>
          <div className={style.modalBg}>
            <section
              style={topPos && { marginTop: topPos }}
              className={style.modalStyle}
            >
              <button onClick={handleModal}>
                <IoClose />
              </button>
              {children}
            </section>
          </div>
        </>
      )}
    </>
  );
};
