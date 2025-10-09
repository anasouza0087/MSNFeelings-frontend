import { Link } from "react-router-dom";
import {
  StyledFormContainer,
  StyledInputFormContainer,
  StyledLogoContainer,
} from "../styles";
import { FormLoginHeader } from "./FormLoginHeader";
import { FormLoginInputs } from "./FormLoginInputs";
import { FormLoginTitleAndSubtitle } from "./FormLoginTitleAndSubtitle";

export const FormLoginRight = () => {
  return (
    <StyledLogoContainer bg="#fff">
      <StyledFormContainer>
        <FormLoginHeader />
        <StyledInputFormContainer>
          <FormLoginTitleAndSubtitle />
          <FormLoginInputs />
          <h4 style={{ color: "#b6b5c2", marginTop: 16 }}>
            Don't you have an account?{" "}
            <Link to={"/account"}>
              <b style={{ color: "#0078d7", cursor: "pointer" }}>Sign Up</b>
            </Link>
          </h4>
        </StyledInputFormContainer>
      </StyledFormContainer>
    </StyledLogoContainer>
  );
};
