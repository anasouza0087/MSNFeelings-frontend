import { styled } from "styled-components"

interface inputType {
  fullwidth?: boolean
}

export const StyledInput = styled.input<inputType>`
  width: 400px;
  border-style: "none";
  border-radius: 6px;
  border: 1px solid #a6abb1;
  height: 35px;
  background-color: #fff;
`
