import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 100%;
  h3 {
    background-color: #a2b5cd;
    color: #f0ffff;
    padding: 10px;
  }
`;

export const Content = styled.div`
  height: 400px;
  width: 100%;
  background-color: #2f4f4f;
  color: #f0ffff;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-direction: column;
`;

export const Comment = styled.span`
  background-color: #2f4f4f;
  border: 1px solid #000080;
  border-radius: 15px;
  background-color: #000080;
  margin: 3px;
  padding: 5px;
  max-width: 250px;
  text-align: left;
  word-break: break-all;
`;
