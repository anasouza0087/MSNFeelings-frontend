import { useState } from "react"
import { listChatroomsService, onReadMessageService } from "../../../services"

export const useMsnFeelings = () => {
  const [chatroomSelected, setChatroomSelected] = useState<string>("")

  const onReadMessages = async (chatroomId: string) => {
    await onReadMessageService("68759721b0c74a9c173b38ae", chatroomId).then(
      () => {
        listChatroomsService(1)
      }
    )
  }

  return {
    chatroomSelected,
    setChatroomSelected,
    onReadMessages,
  }
}
