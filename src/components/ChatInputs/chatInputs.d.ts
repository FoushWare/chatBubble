export interface ChatInputProps {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  messageListRef: React.RefObject<HTMLUListElement>;
  allowedMessageTypes: string[];
}
