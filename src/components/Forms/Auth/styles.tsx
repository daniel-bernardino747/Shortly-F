import styled, { DefaultTheme } from "styled-components";

export interface IInput {
  error: boolean;
}

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Submit = styled.button`
  padding: 1.2em 3em;
  border: none;
  border-radius: 1em;
  color: ${(props) => props.theme.colors.text.reverseBackground};
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
  gap: 1em;

  button:last-child {
    margin-top: 1em;
  }
`;
export const Text = styled.p`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: min(50em, 100%);
  padding: 1.5em;
  border: none;
  border-radius: 1em;
  outline: ${(props: IInput & { theme: DefaultTheme }) =>
    props.error ? "0.1em solid " + props.theme.colors.error : "none"};
  transition: box-shadow 0.3s;

  ::-webkit-input-placeholder {
    font-size: 1.3em;
    color: ${(props) => props.theme.colors.text.secundary};
  }

  &&:focus,
  &&:hover {
    box-shadow: 0 0 1em ${(props) => props.theme.colors.shadow.primary};
  }
`;
export const ErrorText = styled(Text)`
  color: red;
`;
