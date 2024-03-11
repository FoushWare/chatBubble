import {
  MessageItem,
  MessageList,
} from "@Components/ChatMessageList/ChatMessageList.styles";
import renderMessageContent from "@Helper/MessageRenderer";
import { RenderMessagesProps } from "./RenderMessages";
import { useEffect } from "react";

const RenderMessages = ({ messages, messageListRef }: RenderMessagesProps) => {
  useEffect(() => {
    // Scroll to the bottom of the message list whenever messages change
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <MessageList ref={messageListRef}>
      {messages.map((message, index) => (
        <MessageItem key={index} sender={message.sender} accentColor="#000000">
          {renderMessageContent(message)}
        </MessageItem>
      ))}
    </MessageList>
  );
};
export default RenderMessages;
