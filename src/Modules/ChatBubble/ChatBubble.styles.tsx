import styled from "styled-components";

export const Container = styled.div<{ expanded: boolean; accentColor: string }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: ${(props) => (props.expanded ? "340px" : "px")};
  min-height: ${(props) => (props.expanded ? "500px" : "0px")};
  display: ${(props) => (props.expanded ? "block" : "none")};
  overflow: hidden;
  position: fixed;
  bottom: 7.5rem;
  right: 4rem;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    right: 0rem;
    bottom: 0rem;
    width: 100%;
  }
`;

export const Header = styled.div<{ isRTL: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  font-size: 0.75rem;
  background-color: #f2f2f2;
  height: 60px;
  flex-direction: ${(props) => (props.isRTL ? "row-reverse" : "row")};
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid #ccc;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const ExpandButton = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  border: none;
  background-color: #ccc;
  cursor: pointer;
  display: none;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  background-color: #000;
  @media (max-width: 768px) {
    display: block;
  }
`;

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
export const AudioPlayer = styled.audio`
  width: 208px; /* Set the width of the audio player */
`;

export const ChatIconContainer = styled.div<{
  expanded: boolean;
}>`
  height: 90px;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 90px;
  @media (max-width: 768px) {
    display: ${(props) => (props.expanded ? "none" : "block")};
  }
`;

export const ChatIconImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`;
