# How to run The Project

## Install

in your terminal or command line prompt type the following to install the needed dependencies

```bash
yarn
```

## Run

Then run the following command to start the project

```bash
yarn start
```

## structure of the project

The main folder structure of the code is structured like the following:

- **chat\-bubble\-app**
  - [README.md](README.md)
  - [config\-overrides.js](config-overrides.js)
  - [package.json](package.json)
  - **public**
    - **locales**
      - **ar**
        - [translation.json](public/locales/ar/translation.json)
      - **en**
        - [translation.json](public/locales/en/translation.json)
  - **src**
    - [App.tsx](src/App.tsx)
    - **Hooks**
      - [useExpand.ts](src/Hooks/useExpand.ts)
    - **Modules**
      - **ChatBubble**
        - [ChatBubble.styles.tsx](src/Modules/ChatBubble/ChatBubble.styles.tsx)
        - [index.tsx](src/Modules/ChatBubble/index.tsx)
    - **Types**
      - [index.d.ts](src/Types/index.d.ts)
    - **components**
      - **ChatHeader**
        - [ChatHeader.styles.tsx](src/components/ChatHeader/ChatHeader.styles.tsx)
        - [chatHeader.d.ts](src/components/ChatHeader/chatHeader.d.ts)
        - [index.tsx](src/components/ChatHeader/index.tsx)
      - **ChatInputs**
        - [ChatInputs.styles.tsx](src/components/ChatInputs/ChatInputs.styles.tsx)
        - [chatInputs.d.ts](src/components/ChatInputs/chatInputs.d.ts)
        - [index.tsx](src/components/ChatInputs/index.tsx)
      - **ChatLogo**
        - [ChatLogo.styles.tsx](src/components/ChatLogo/ChatLogo.styles.tsx)
        - [chatLogo.d.ts](src/components/ChatLogo/chatLogo.d.ts)
        - [index.tsx](src/components/ChatLogo/index.tsx)
      - **ChatMessageList**
        - [ChatMessageList.styles.tsx](src/components/ChatMessageList/ChatMessageList.styles.tsx)
        - [chatMessageList.d.ts](src/components/ChatMessageList/chatMessageList.d.ts)
        - [index.tsx](src/components/ChatMessageList/index.tsx)
      - **LanguageSelector**
        - [LanguageSelector.d.ts](src/components/LanguageSelector/LanguageSelector.d.ts)
        - [LanguageSelector.style.tsx](src/components/LanguageSelector/LanguageSelector.style.tsx)
        - [index.tsx](src/components/LanguageSelector/index.tsx)
    - **helper**
      - [MessageRenderer.tsx](src/helper/MessageRenderer.tsx)
      - [messageHandlers.tsx](src/helper/messageHandlers.tsx)
    - [i18n.js](src/i18n.js)
    - [index.css](src/index.css)
    - [index.tsx](src/index.tsx)
    - **mocks**
      - [messages.ts](src/mocks/messages.ts)
  - [tsconfig.json](tsconfig.json)
