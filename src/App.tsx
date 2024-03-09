import ChatBubble from "@Modules/ChatBubble";
import messagesList from "./mocks/messages";
import { Message } from "./Types";
import { useState } from "react";
import LanguageSelector from "@Components/LanguageSelector";
import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
          messages={messages}
          setMessages={setMessages}
        />
      </>
    </>
  );
}

export default App;
