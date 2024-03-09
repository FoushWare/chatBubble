import {
  Avatar,
  Header,
  Title,
} from "../../Modules/ChatBubble/ChatBubble.styles";
import { ChatHeaderProps } from "./chatHeader";

const ChatHeader = ({ expanded, avatarUrl, title }: ChatHeaderProps) => (
  <Header>
    {expanded && (
      <>
        <Avatar src={avatarUrl} alt="Avatar" />
        <Title>{title}</Title>
      </>
    )}
  </Header>
);
export default ChatHeader;
