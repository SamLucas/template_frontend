import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border-width: 0px;
  border-radius: 5px;
  color: ${props => props.theme.colors.text.three};
  background-color: ${props => props.theme.colors.background.first};
`;
