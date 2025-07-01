import {
  StyledContainerInputs,
  StyledInputLabelContainer,
  StyledInput,
  StyledButton,
} from "../styles";

export const FormLoginInputs = () => {
  return (
    <StyledContainerInputs>
      <StyledInputLabelContainer>
        <label>Login</label>
        <StyledInput placeholder="Enter your e-mail" />
      </StyledInputLabelContainer>
      <StyledInputLabelContainer>
        <label>Senha</label>
        <StyledInput placeholder="Enter your password" />
      </StyledInputLabelContainer>
      <StyledButton>Sign In</StyledButton>
    </StyledContainerInputs>
  );
};
