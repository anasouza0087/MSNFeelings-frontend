import { StyledInput } from "./styles"

interface InputTypes {
  label: string
}

export const Input = ({ label }: InputTypes) => {
  return <StyledInput onChange={() => null} />
}
