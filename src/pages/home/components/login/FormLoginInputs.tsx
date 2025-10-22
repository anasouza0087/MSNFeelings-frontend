import { useState } from "react"

import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useLogin } from "../../hook/useLogin"
import { StyledContainerInputs, StyledInputLabelContainer } from "../../styles"
import type { ILoginCredentials } from "../../types"
import { Button, Input } from "../../../../ui"

export const FormLoginInputs = () => {
  const [formLogin, setFormLogin] = useState<ILoginCredentials>({
    email: "",
    password: "",
  })
  const [hidePassword, setHidePassword] = useState(true)

  const { onValidateLogin } = useLogin()

  return (
    <StyledContainerInputs>
      <StyledInputLabelContainer>
        <label>Login</label>
        <Input
          placeholder="Enter your e-mail"
          onChange={(e) => {
            setFormLogin({
              ...formLogin,
              email: e.target.value,
            })
          }}
        />
      </StyledInputLabelContainer>
      <StyledInputLabelContainer>
        <label>Senha</label>
        <span style={{ width: "100%", position: "relative" }}>
          <Input
            placeholder="Enter your password"
            onChange={(e) => {
              setFormLogin({
                ...formLogin,
                password: e.target.value,
              })
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
      <Button onClick={() => onValidateLogin(formLogin)} label="Sign In" />
    </StyledContainerInputs>
  )
}
