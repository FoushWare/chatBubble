import React, { useRef } from "react";
import { ChatBubbleProps } from "../../Types";
import { Container } from "./ChatBubble.styles";
import ChatLogo from "@Components/ChatLogo";
import ChatInputs from "@Components/ChatInputs";
import ChatHeader from "@Components/ChatHeader";
import ChatMessageList from "@Components/ChatMessageList";
import useExpanded from "Hooks/useExpand";
import { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import { useTranslation } from "react-i18next";
const ChatBubble: React.FC<ChatBubbleProps> = ({
  title,
  avatarUrl,
  accentColor,
  messages,
  setMessages,
}) => {
  const { expanded, toggleExpand } = useExpanded(false);
  const messageListRef = useRef<HTMLUListElement>(null);
  const {
    i18n: { language: lang },
  } = useTranslation();

  return (
    <>
      {/* ---- Stylis Plugin to switch RTL  and LTR -------- */}
      <StyleSheetManager stylisPlugins={lang === "ar" ? [rtlPlugin] : []}>
        {/* ---- Main Chat Bubble Component -------- */}
        <ChatLogo toggleExpand={toggleExpand} expanded={expanded} />
        <Container expanded={expanded} accentColor={accentColor}>
          <ChatHeader
            expanded={expanded}
            avatarUrl={avatarUrl}
            title={title}
            toggleExpand={toggleExpand}
          />
          {expanded && (
            <>
              <ChatMessageList
                messages={messages}
                accentColor={accentColor}
                messageListRef={messageListRef}
              />
              <ChatInputs
                messages={messages}
                setMessages={setMessages}
                messageListRef={messageListRef}
              />
            </>
          )}
        </Container>
      </StyleSheetManager>
    </>
  );
};

export default ChatBubble;
