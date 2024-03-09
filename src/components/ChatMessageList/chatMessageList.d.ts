import { Message } from "../../Types";
export interface ChatMessageListProps {
  messages: Message[];
  accentColor: string;
  messageListRef: React.RefObject<HTMLUListElement>;
}
