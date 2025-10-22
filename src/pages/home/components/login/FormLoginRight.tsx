import { FormLoginHeader } from "./FormLoginHeader"
import { FormLoginInputs } from "./FormLoginInputs"
import { FormLoginTitleAndSubtitle } from "./FormLoginTitleAndSubtitle"
import {
  StyledLogoContainer,
  StyledFormContainer,
  StyledInputFormContainer,
} from "../../styles"
import { useState } from "react"
import { CreateUser } from "../createUser"

export const FormLoginRight = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  console.log(isLogin)

  return (
    <StyledLogoContainer bg="#fff">
      <StyledFormContainer>
        <FormLoginHeader />
        <StyledInputFormContainer>
          {isLogin && (
            <>
              <FormLoginTitleAndSubtitle />
              <FormLoginInputs />
              <h4 style={{ color: "#b6b5c2", marginTop: 16 }}>
                Don't you have an account?{" "}
                <b
                  style={{ color: "#0078d7", cursor: "pointer" }}
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </b>
              </h4>
            </>
          )}
          {!isLogin && <CreateUser isLogin={setIsLogin} />}
        </StyledInputFormContainer>
      </StyledFormContainer>
    </StyledLogoContainer>
  )
}
