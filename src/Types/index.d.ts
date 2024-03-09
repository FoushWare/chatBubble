export interface BaseMessage {
  type: string;
  sender: "self" | "other";
}

export interface TextMessage extends BaseMessage {
  type: "text";
  content: string;
}

export interface ImageMessage extends BaseMessage {
  type: "image";
  imageUrl: string;
}

export interface VoiceMessage extends BaseMessage {
  type: "voice";
  audioUrl: string;
}

//User can Define additional message types
// export interface VideoMessage extends BaseMessage {
//   type: "video";
//   videoUrl: string;
// }

// export interface LocationMessage extends BaseMessage {
//   type: "location";
// latitude: number;
// longitude: number;
// }

export type Message = TextMessage | ImageMessage | VoiceMessage;
//   | VideoMessage
//   | LocationMessage;

export interface ChatBubbleProps {
  title: string;
  avatarUrl: string;
  accentColor: string;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}
