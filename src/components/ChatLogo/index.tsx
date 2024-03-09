import {
  ChatIconContainer,
  ChatIconImage,
} from "../../Modules/ChatBubble/ChatBubble.styles";
import { ChatLogoProps } from "./chatLogo";
const ChatLogo = ({ expanded, toggleExpand }: ChatLogoProps) => {
  const bubleIconSrc = expanded ? "/down-arrow.svg" : "/chat-logo.svg";
  return (
    <ChatIconContainer expanded={expanded}>
      <ChatIconImage
        src={bubleIconSrc}
        alt="Chat Logo"
        onClick={toggleExpand}
      />
    </ChatIconContainer>
  );
};
export default ChatLogo;
