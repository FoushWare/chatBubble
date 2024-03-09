import styled from "styled-components";
export const ChatIconContainer = styled.div<{
  expanded: boolean;
}>`
  height: 90px;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 90px;
  @media (max-width: 768px) {
    display: ${(props) => (props.expanded ? "none" : "block")};
  }
`;

export const ChatIconImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`;
