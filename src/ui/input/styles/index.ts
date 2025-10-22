import { styled } from "styled-components"

interface inputType {
  fullwidth?: boolean
  
}

export const StyledInput = styled.input<inputType>`
  padding: 12px;
  border: 1px solid #b6b5c2;
  margin-top: 8px;
  width: 100%;
`
