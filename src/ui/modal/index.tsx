import { ModalActions } from "./components/ModalActions"
import { ModalContent, ModalOverlay } from "./styles"

export const Modal = ({ onClose, children, onSave }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <ModalActions onClose={onClose} onSave={onSave} />
      </ModalContent>
    </ModalOverlay>
  )
}
