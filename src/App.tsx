import ChatBubble from "@Modules/ChatBubble";
import messagesList from "./mocks/messages";
import { Message } from "./Types";
import { useState } from "react";
function App() {
  const [messages, setMessages] = useState<Message[]>([...messagesList]);

  return (
    <ChatBubble
      title="H&M Store Support"
      avatarUrl="/site-logo.svg"
      accentColor="#000000"
      messages={messages}
      setMessages={setMessages}
    />
  );
}

export default App;
