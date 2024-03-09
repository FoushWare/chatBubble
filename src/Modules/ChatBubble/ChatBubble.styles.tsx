import styled from "styled-components";

export const Container = styled.div<{ expanded: boolean; accentColor: string }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: ${(props) => (props.expanded ? "340px" : "px")};
  min-height: ${(props) => (props.expanded ? "500px" : "0px")};
  display: ${(props) => (props.expanded ? "block" : "none")};
  overflow: hidden;
  position: fixed;
  bottom: 7.5rem;
  right: 4rem;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    right: 0rem;
    bottom: 0rem;
    width: 100%;
  }
`;

export const AudioPlayer = styled.audio`
  width: 208px; /* Set the width of the audio player */
`;
