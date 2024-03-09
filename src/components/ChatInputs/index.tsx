import React, { useState } from "react";
import {
  Input,
  InputContainer,
  SendButton,
  SendButtonIcon,
  SendButtonImage,
} from "../../Modules/ChatBubble/ChatBubble.styles";
import { ChatInputProps } from "./chatInputs";
import {
  handleSendTextMessage,
  handleSendImageMessage,
} from "@Helper/messageHandlers";

const ChatInputs: React.FC<ChatInputProps> = ({
  messages,
  setMessages,
  messageListRef,
}: ChatInputProps) => {
  const [textMessage, setTextMessage] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextMessage(event.target.value);
  };

  return (
    <InputContainer>
      <Input
        placeholder="Type your message..."
        value={textMessage}
        onChange={handleTextChange}
      />
      <label htmlFor="fileInput">
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(event) =>
            handleSendImageMessage(event, messages, setMessages, messageListRef)
          }
        />
        <SendButton as="span">
          <SendButtonIcon src="/attach.svg" />
        </SendButton>
      </label>
      <SendButton
        onClick={() =>
          handleSendTextMessage(
            textMessage,
            setTextMessage,
            messages,
            setMessages,
            messageListRef
          )
        }
      >
        <SendButtonImage src="/send.svg" alt="Send" />
      </SendButton>
    </InputContainer>
  );
};

export default ChatInputs;
