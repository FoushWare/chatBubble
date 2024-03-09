import { Message } from "../Types";

// Mock messages
const messages: Message[] = [
  {
    type: "text",
    sender: "self",
    content: "Hello, how are you?",
  },
  {
    type: "image",
    sender: "other",
    imageUrl: "https://placehold.co/400",
  },
  {
    type: "voice",
    sender: "other",
    audioUrl: "https://example.com/audio.mp3",
  },
  {
    type: "text",
    sender: "self",
    content: "I'm doing well, thank you!",
  },
  {
    type: "text",
    sender: "other",
    content: "That's great!",
  },
  {
    type: "text",
    sender: "self",
    content: "What do you do for a living?",
  },
  {
    type: "text",
    sender: "other",
    content: "I work as a software engineer.",
  },
  {
    type: "text",
    sender: "self",
    content: "Where do you work?",
  },
  {
    type: "text",
    sender: "other",
    content: "I work at H&M.",
  },
  {
    type: "text",
    sender: "self",
    content: "What's your favorite color?",
  },
  {
    type: "text",
    sender: "other",
    content: "I like blue.",
  },
  {
    type: "image",
    sender: "other",
    imageUrl: "https://placehold.co/400",
  },
  {
    type: "text",
    sender: "other",
    content: "I like blue.",
  },
  {
    type: "image",
    sender: "other",
    imageUrl: "https://placehold.co/400",
  },
  {
    type: "text",
    sender: "other",
    content: "I like blue.",
  },
];

export default messages;
