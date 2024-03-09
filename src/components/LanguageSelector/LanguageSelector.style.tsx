import styled from "styled-components";

export const Button = styled.button<{ accentColor: string }>`
  padding: 8px 16px;
  border: none;
  background-color: ${(props) => props.accentColor};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 0 4px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;
export const SelectorButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem;
  background-color: #f2f2f2;
`;
