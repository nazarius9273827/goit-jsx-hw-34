import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 12px 16px;
  border-radius: 12px;

  background: #ddf8ffff;
  border: 1px solid #87F6FF;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
`;

export const DeleteButton = styled.button`
  background: #CC2936;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: #FE4A49;
  }
`;
