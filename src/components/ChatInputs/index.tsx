import {
  Input,
  InputContainer,
  SendButton,
  SendButtonIcon,
  SendButtonImage,
} from "../../Modules/ChatBubble/ChatBubble.styles";
import { ChatInputProps } from "./chatInputs";
import { TextMessage } from "@Types/index";
const ChatInputs = ({
  textMessage,
  setTextMessage,
  messages,
  setMessages,
  messageListRef,
}: ChatInputProps) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextMessage(event.target.value);
  };

  const handleSendTextMessage = () => {
    if (textMessage.trim() !== "") {
      const newMessage: TextMessage = {
        type: "text",
        content: textMessage,
        sender: "self",
      };
      // Add the new text message to the messages array
      setMessages([...messages, newMessage]);
      // Scroll to the last message after a timeout
      setTimeout(() => {
        if (messageListRef.current) {
          const lastMessageElement = messageListRef.current.lastElementChild;
          if (lastMessageElement) {
            lastMessageElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
      // messageListRef.current?.scrollIntoView({ behavior: "smooth" });
      setTextMessage(""); // Clear the input field after sending
    }
  };
  const handleSendImageMessage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Add the new image message to the messages array
      setMessages([
        ...messages,
        {
          type: "image",
          imageUrl: URL.createObjectURL(selectedFile),
          sender: "self",
        },
      ]);
      // Scroll to the last message after a timeout to ensure the image is rendered
      setTimeout(() => {
        if (messageListRef.current) {
          const lastMessageElement = messageListRef.current.lastElementChild;
          if (lastMessageElement) {
            lastMessageElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    }
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
          onChange={(event) => {
            handleSendImageMessage(event);
          }}
        />
        <SendButton as="span">
          <SendButtonIcon src="/attach.svg" />
        </SendButton>
      </label>
      <SendButton onClick={handleSendTextMessage}>
        <SendButtonImage src="/send.svg" alt="Send" />
      </SendButton>
    </InputContainer>
  );
};

export default ChatInputs;
