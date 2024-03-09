import styled from "styled-components";
export const Header = styled.div<{ isRTL: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  font-size: 0.75rem;
  background-color: #f2f2f2;
  height: 60px;
  flex-direction: ${(props) => (props.isRTL ? "row-reverse" : "row")};
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid #ccc;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const ExpandButton = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  border: none;
  background-color: #ccc;
  cursor: pointer;
  display: none;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  background-color: #000;
  @media (max-width: 768px) {
    display: block;
  }
`;
