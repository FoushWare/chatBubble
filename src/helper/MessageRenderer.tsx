import { AudioPlayer } from "../Modules/ChatBubble/ChatBubble.styles";
import { Message, TextMessage, ImageMessage, VoiceMessage } from "../Types";

const renderMessageContent = (message: Message) => {
  switch (message.type) {
    case "text":
      return (message as TextMessage).content;
    case "image":
      return (
        <img
          src={(message as ImageMessage).imageUrl}
          alt="Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      );
    case "voice":
      return (
        // <audio controls>
        //   <source src={(message as VoiceMessage).audioUrl} type="audio/mpeg" />
        //   Your browser does not support the audio element.
        // </audio>
        <AudioPlayer controls>
          <source src={(message as VoiceMessage).audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </AudioPlayer>
      );
    // User can Handle additional message types
    // case "video":
    //   return <video controls src={(message as VideoMessage).videoUrl} />;
    // case "location":
    //   return `Location: ${(message as LocationMessage).coordinates}`;
    default:
      return null;
  }
};

export default renderMessageContent;
