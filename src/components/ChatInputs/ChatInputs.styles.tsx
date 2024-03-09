import styled from "styled-components";

export const InputContainer = styled.div<{ isRTL: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 17px;
  gap: 8px;
  background-color: #f2f2f2;
  border-top: 1px solid #ccc;
  overflow: hidden;
  background: #fff;
  flex-direction: ${(props) => (props.isRTL ? "row-reverse" : "row")};
`;

export const Input = styled.textarea<{ isRTL: boolean }>`
  flex: 1;
  margin-right: 8px;
  border: none;
  display: block;
  resize: none;
  width: 100%;
  background-color: inherit;
  color: var(--spr-lc-d-1);
  outline: none;
  font-size: 0.875rem;
  direction: ${(props) => (props.isRTL ? "rtl" : "ltr")};
`;

export const SendButton = styled.div`
  border: none;
  color: #fff;
  cursor: pointer;
`;
export const SendButtonImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const SendButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
