import styled from "styled-components";
export const MessageList = styled.ul`
  list-style: none;
  padding: 12px 16px 0px;
  overflow-y: scroll;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;

export const MessageItem = styled.li<{ sender: string; accentColor: string }>`
  padding: 8px;
  background-color: ${({ sender, accentColor }) =>
    sender === "self" ? accentColor : "#f2f2f2"};
  align-self: ${({ sender }) =>
    sender === "self" ? "flex-end" : "flex-start"};
  border-radius: 12px;
  color: ${({ sender, accentColor }) => (sender === "self" ? "#fff" : "#000")};
  margin-bottom: 8px;
`;
