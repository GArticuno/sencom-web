import styled, { css } from "styled-components";


export const ModalContainer = styled.div`
  display: flex;
  flex: 1;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  position: fixed;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  min-height: 18.75rem;
  min-width: 29.625rem;
  position: relative;

  background: #ffffff;

  border-radius: 12px;
  padding: 3.75rem 3.18rem;
`;

export const XButton = styled.button`
  position: absolute;
  background: none;
  top: 1.5rem;
  right: 1.5rem;

  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;
