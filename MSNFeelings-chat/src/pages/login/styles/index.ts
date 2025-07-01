import styled from "styled-components";

interface IStyledLogoContainer {
  bg?: string;
}

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 40px;
`;

export const StyledLogoContainer = styled.div<IStyledLogoContainer>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg || ""};
  width: 80%;
  height: 90%;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
`;

export const StyledHeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StyledInputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 100%;
  margin-top: 10%;
`;

export const StyledTitle = styled.h1`
  color: #0078d7;
`;

export const StyleSubtitle = styled.h3`
  color: #b6b5c2;
  font-weight: bold;
  margin-bottom: 22px;
`;

export const StyledContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputLabelContainer = styled.div`
  margin: 8px 0px 8px 0px;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 12px;
  border: 0px none #fff;
  margin-top: 8px;
`;

export const StyledButton = styled.button`
  background-color: #0078d7;
  color: #fff;
  width: 60%;
  padding: 12px;
  border: 0px none #0078d7;
  margin-top: 8px;
`;
