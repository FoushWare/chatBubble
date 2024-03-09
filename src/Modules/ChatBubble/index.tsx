import React, { useRef, useState } from "react";
import { ChatBubbleProps } from "../../Types";
import { Container } from "./ChatBubble.styles";
import ChatLogo from "@Components/ChatLogo";
import ChatInputs from "@Components/ChatInputs";
import ChatHeader from "@Components/ChatHeader";
import ChatMessageList from "@Components/ChatMessageList";
import useExpanded from "Hooks/useExpand";

const ChatBubble: React.FC<ChatBubbleProps> = ({
  title,
  avatarUrl,
  accentColor,
  messages,
  setMessages,
}) => {
  const [textMessage, setTextMessage] = useState("");
  const { expanded, toggleExpand } = useExpanded(false);
  const messageListRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <ChatLogo toggleExpand={toggleExpand} expanded={expanded} />
      <Container expanded={expanded} accentColor={accentColor}>
        <ChatHeader expanded={expanded} avatarUrl={avatarUrl} title={title} />
        {expanded && (
          <>
            <ChatMessageList
              messages={messages}
              accentColor={accentColor}
              messageListRef={messageListRef}
            />
            <ChatInputs
              textMessage={textMessage}
              setTextMessage={setTextMessage}
              messages={messages}
              setMessages={setMessages}
              messageListRef={messageListRef}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default ChatBubble;
