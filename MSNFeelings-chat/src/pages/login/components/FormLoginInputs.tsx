import { useState } from "react";
import { useLogin } from "../hook/useLogin";
import {
  StyledContainerInputs,
  StyledInputLabelContainer,
  StyledInput,
  StyledButton,
} from "../styles";
import type { ILoginCredentials } from "../types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const FormLoginInputs = () => {
  const [formLogin, setFormLogin] = useState<ILoginCredentials>({
    email: "",
    password: "",
  });
  const [hidePassword, setHidePassword] = useState(true);

  const { onValidateLogin } = useLogin();

  return (
    <StyledContainerInputs>
      <StyledInputLabelContainer>
        <label>Login</label>
        <StyledInput
          placeholder="Enter your e-mail"
          onChange={(e) => {
            setFormLogin({
              ...formLogin,
              email: e.target.value,
            });
          }}
        />
      </StyledInputLabelContainer>
      <StyledInputLabelContainer>
        <label>Senha</label>
        <span style={{ width: "100%", position: "relative" }}>
          <StyledInput
            placeholder="Enter your password"
            onChange={(e) => {
              setFormLogin({
                ...formLogin,
                password: e.target.value,
              });
            }}
            type={hidePassword ? "password" : "text"}
          />
          <span style={{ position: "absolute", top: 20, right: 20 }}>
            {hidePassword ? (
              <FaEyeSlash
                onClick={() => setHidePassword(!hidePassword)}
                cursor="pointer"
              />
            ) : (
              <FaEye
                onClick={() => setHidePassword(!hidePassword)}
                cursor="pointer"
              />
            )}
          </span>
        </span>
      </StyledInputLabelContainer>
      <StyledButton onClick={() => onValidateLogin(formLogin)}>
        Sign In
      </StyledButton>
    </StyledContainerInputs>
  );
};
