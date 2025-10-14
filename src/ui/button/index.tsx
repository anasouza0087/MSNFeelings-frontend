import { StyledButton } from "./styles"

interface ButtonTypes {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonTypes) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}
