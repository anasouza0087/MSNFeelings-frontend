import { StyledInput } from "./styles"

interface InputTypes {
  label?: string
  placeholder?: string
  onChange: (event: any) => void
  type?: InputType
}

type InputType = "password" | "text"

export const Input = ({ label, placeholder, onChange, type }: InputTypes) => {
  return (
    <StyledInput
      onChange={onChange}
      type={type ?? "text"}
      placeholder={placeholder}
    />
  )
}
