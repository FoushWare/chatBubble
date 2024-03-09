import { useEffect } from "react";
import { MessageItem, MessageList } from "./ChatMessageList.styles";
import renderMessageContent from "../../helper/MessageRenderer";
import { ChatMessageListProps } from "./chatMessageList";

// Chat Message List component
const ChatMessageList = ({
  messages,
  accentColor,
  messageListRef,
}: ChatMessageListProps) => {
  // const messageListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the message list whenever messages change
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <MessageList ref={messageListRef}>
      {messages.map((message, index) => (
        <MessageItem
          key={index}
          sender={message.sender}
          accentColor={accentColor}
        >
          {renderMessageContent(message)}
        </MessageItem>
      ))}
    </MessageList>
  );
};

export default ChatMessageList;
