import { Message } from "../../Types";
export interface ChatMessageListProps {
  messages: Message[];
  messageListRef: React.RefObject<HTMLUListElement>;
  renderMessages: () => JSX.Element[];
}
