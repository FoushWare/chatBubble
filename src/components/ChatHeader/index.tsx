import { useTranslation } from "react-i18next";
import { Avatar, ExpandButton, Header, Title } from "./ChatHeader.styles";
import { ChatHeaderProps } from "./chatHeader";

const ChatHeader = ({
  expanded,
  avatarUrl,
  title,
  toggleExpand,
}: ChatHeaderProps) => {
  const {
    i18n: { language: lang },
  } = useTranslation();
  return (
    <Header isRTL={lang === "ar"}>
      {expanded && (
        <>
          <Avatar src={avatarUrl} alt="Avatar" />
          <Title>{title}</Title>
          <ExpandButton onClick={() => toggleExpand()}>
            {expanded ? "X" : ""}
          </ExpandButton>
        </>
      )}
    </Header>
  );
};
export default ChatHeader;
