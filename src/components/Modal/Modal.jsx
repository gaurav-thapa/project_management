import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
const Modal = forwardRef(({ children, buttonCaption }, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog className="p-4 border-0" style={styles.dialog} ref={dialog}>
            {children}
            <form className="text-end" method="dialog">

                <button type="submit" className="btn btn-success">{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});
export default Modal;