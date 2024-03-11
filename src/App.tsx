import ChatBubble from "@Modules/ChatBubble";
import messagesList from "./mocks/messages";
import { Message } from "./Types";
import { useRef, useState } from "react";
import LanguageSelector from "@Components/LanguageSelector";
import { useTranslation } from "react-i18next";
import renderMessageContent from "@Helper/MessageRenderer";
import { MessageItem } from "@Components/ChatMessageList/ChatMessageList.styles";
import RenderMessages from "@Components/RenderMessages";
import ChatInputs from "@Components/ChatInputs";

function App() {
  const [messages, setMessages] = useState<Message[]>([...messagesList]);
  const { t } = useTranslation(["translation"]);
  const messageListRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <>
        <LanguageSelector accentColor="#000000" />
        <ChatBubble
          title={t("company-name")}
          avatarUrl="/site-logo.svg"
          accentColor="#000000"
          renderChatInputs={() => (
            <ChatInputs
              messages={messages}
              setMessages={setMessages}
              messageListRef={messageListRef}
              allowedMessageTypes={["text", "image"]}
            />
          )}
          renderMessages={() => (
            <RenderMessages
              messages={messages}
              messageListRef={messageListRef}
            />
          )}
        />
      </>
    </>
  );
}

export default App;
