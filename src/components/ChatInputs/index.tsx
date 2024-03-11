import React, { useState } from "react";
import {
  Input,
  InputContainer,
  SendButton,
  SendButtonIcon,
  SendButtonImage,
} from "./ChatInputs.styles";
import { ChatInputProps } from "./chatInputs";
import {
  handleSendTextMessage,
  handleSendImageMessage,
} from "@Helper/messageHandlers";
import { useTranslation } from "react-i18next";

const ChatInputs: React.FC<ChatInputProps> = ({
  messages,
  setMessages,
  messageListRef,
  allowedMessageTypes, // Array of allowed message types
}: ChatInputProps & { allowedMessageTypes: string[] }) => {
  const [textMessage, setTextMessage] = useState("");
  const {
    i18n: { language: lang },
    t,
  } = useTranslation(["translation"]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextMessage(event.target.value);
  };

  const renderInputBasedOnMessageType = () => {
    return allowedMessageTypes.map((type) => {
      switch (type) {
        case "text":
          return (
            <Input
              key={type}
              placeholder={t("write-your-message-here", { lng: lang })}
              value={textMessage}
              onChange={handleTextChange}
              isRTL={lang === "ar"}
            />
          );
        case "image":
          return (
            <label key={type} htmlFor="fileInput">
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(event) =>
                  handleSendImageMessage(
                    event,
                    messages,
                    setMessages,
                    messageListRef
                  )
                }
              />
              <SendButton as="span">
                <SendButtonIcon src="/attach.svg" />
              </SendButton>
            </label>
          );
        // Add other cases for other message types (e.g., "video")
        default:
          return null;
      }
    });
  };

  return (
    <InputContainer isRTL={lang === "ar"}>
      {renderInputBasedOnMessageType()}
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
