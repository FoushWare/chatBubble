import ChatBubble from "@Modules/ChatBubble";
import messagesList from "./mocks/messages";
import { Message } from "./Types";
import { useState } from "react";
import LanguageSelector from "@Components/LanguageSelector";
import { useTranslation } from "react-i18next";
import renderMessageContent from "@Helper/MessageRenderer";
import { MessageItem } from "@Components/ChatMessageList/ChatMessageList.styles";

function App() {
  const [messages, setMessages] = useState<Message[]>([...messagesList]);
  const { t } = useTranslation(["translation"]);

  return (
    <>
      <>
        <LanguageSelector accentColor="#000000" />
        <ChatBubble
          title={t("company-name")}
          avatarUrl="/site-logo.svg"
          accentColor="#000000"
          // 🚨 messages and setMessages
          // 🚨 to be used as props for the chatInputs to update the messagesList
          // 🚨 we can neglect it if the user provide his Logic for updationg the
          // 🚨entered messages
          messages={messages}
          setMessages={setMessages}
          renderMessages={() =>
            messages.map((message, index) => (
              <MessageItem
                key={index}
                sender={message.sender}
                accentColor="#000000"
              >
                {renderMessageContent(message)}
              </MessageItem>
            ))
          }
        />
      </>
    </>
  );
}

export default App;
