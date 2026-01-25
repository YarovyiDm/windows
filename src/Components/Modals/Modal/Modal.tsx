import { ModalProps } from "Components/Modals/Modal/Modal.types";
import { ModalWrapper } from "Components/Modals/Modal/Modal.styled";

const Modal = ({ children }: ModalProps) => {
    return (
        <ModalWrapper onClick={e => e.stopPropagation()}>
            {children}
        </ModalWrapper>
    );
};

export default Modal;