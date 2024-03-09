export interface ChatInputProps {
  textMessage: string;
  setTextMessage: (textMessage: string) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  messageListRef: React.RefObject<HTMLUListElement>;
}
