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
        </StyledInputFormContainer>
      </StyledFormContainer>
    </StyledLogoContainer>
  );
};
