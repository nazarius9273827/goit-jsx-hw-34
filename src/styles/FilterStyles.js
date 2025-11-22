import styled from "styled-components";

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  margin-top: 10px;

  border-radius: 8px;
  border: 2px solid #ccc;
  font-size: 16px;

  transition: 0.25s;

  &:focus {
    border-color: #44FFD2;
    outline: none;
    box-shadow: 0px 0px 4px rgba(108, 92, 231, 0.5);
  }
`;
