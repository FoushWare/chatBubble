// messageHandlers.ts

import { ImageMessage, Message, TextMessage } from "@Types/index";

export const handleSendTextMessage = (
  textMessage: string,
  setTextMessage: React.Dispatch<React.SetStateAction<string>>,
  messages: Message[],
  setMessages: (messages: Message[]) => void,
  messageListRef: React.RefObject<HTMLUListElement>
) => {
  if (textMessage.trim() !== "") {
    const newMessage: TextMessage = {
      type: "text",
      content: textMessage,
      sender: "self",
    };
    setMessages([...messages, newMessage]);
    scrollToBottom(messageListRef);
    setTextMessage("");
  }
};

export const handleSendImageMessage = (
  event: React.ChangeEvent<HTMLInputElement>,
  messages: Message[],
  setMessages: (messages: Message[]) => void,
  messageListRef: React.RefObject<HTMLUListElement>
) => {
  const selectedFile = event.target.files?.[0];
  if (selectedFile) {
    const newMessage: ImageMessage = {
      type: "image",
      imageUrl: URL.createObjectURL(selectedFile),
      sender: "self",
    };
    setMessages([...messages, newMessage]);
    scrollToBottom(messageListRef);
  }
};

const scrollToBottom = (messageListRef: React.RefObject<HTMLUListElement>) => {
  setTimeout(() => {
    if (messageListRef.current) {
      const lastMessageElement = messageListRef.current.lastElementChild;
      if (lastMessageElement) {
        lastMessageElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, 100);
};
