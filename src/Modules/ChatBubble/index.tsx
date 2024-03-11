import React, { useRef } from "react";
import { ChatBubbleProps } from "../../Types";
import { Container } from "./ChatBubble.styles";
import ChatLogo from "@Components/ChatLogo";
import ChatHeader from "@Components/ChatHeader";
import useExpanded from "Hooks/useExpand";
import { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import { useTranslation } from "react-i18next";

const ChatBubble: React.FC<ChatBubbleProps> = ({
  title,
  avatarUrl,
  renderMessages,
  renderChatInputs,
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
        <Container expanded={expanded}>
          <ChatHeader
            expanded={expanded}
            avatarUrl={avatarUrl}
            title={title}
            toggleExpand={toggleExpand}
          />
          {expanded && (
            <>
              {/* The user is responsible for rendering the message list */}
              {renderMessages()}
              {/* The user is responsible for rendering the chat input with different 
                  input types based on the message type
               */}
              {renderChatInputs()}
            </>
          )}
        </Container>
      </StyleSheetManager>
    </>
  );
};

export default ChatBubble;
