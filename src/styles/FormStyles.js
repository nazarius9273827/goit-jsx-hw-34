import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 10px 14px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #ccc;
  transition: 0.25s;

  &:focus {
    border-color: #08415C;
    outline: none;
    box-shadow: 0px 0px 4px rgba(108, 92, 231, 0.5);
  }
`;

export const Button = styled.button`
  padding: 10px;
  background: #08415C;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: #1188BF;
  }
`;
