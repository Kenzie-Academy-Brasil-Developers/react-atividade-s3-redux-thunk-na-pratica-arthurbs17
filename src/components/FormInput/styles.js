import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: stretch;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #000080;
  color: #fff;
  font-family: "Roboto", sans-serif;
  border: 1px solid #fff;
  :hover {
    border-color: #ffd700;
    color: #ffd700;
  }
`;
