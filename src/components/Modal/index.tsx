import React, { ReactNode, SetStateAction, Dispatch, } from "react";

import { IoMdClose } from "react-icons/io";
import { useTheme } from "../../hooks/theme";

import * as S from "./styles";

interface IModal {
  children: ReactNode;
  width?: string;
  modalIsVisible: boolean;
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
  XButtonIcon?: boolean;
}

export const Modal: React.FC<IModal> = ({
  children,
  modalIsVisible,
  setModalIsVisible,
  XButtonIcon,
}) => {
  const { usedTheme } = useTheme();

  const closeModal = () => {
    setModalIsVisible(false);
  }

  return (
    <S.ModalContainer style={{ display: modalIsVisible ? "flex" : "none" }}>
      <S.Modal>
        {XButtonIcon && (
          <S.XButton type="button" onClick={closeModal}>
            <IoMdClose size={25} color={usedTheme.colors.primary} />
          </S.XButton>
        )}
        {children}
      </S.Modal>
    </S.ModalContainer>

  );
};
