import { useEffect, useState } from "react"
import {
  createMessage,
  deleteChatroom,
  getChatroomById,
  getMessagesByChatroomId,
  listChatroomsService,
} from "../../../services"
import { useMsnFeelingsContext } from "../../shared/context/useMsnFeelingsContext"
import type { IMessage } from "../../../services/messages/types"

export const useChatMessages = () => {
  const [chatroomMessages, setChatroomMessages] = useState<any[]>([])
  const [chatroomDetails, setChatroomDetails] = useState<{
    _id: string
    name: string
  }>({ _id: "", name: "" })
  const { chatroomSelected } = useMsnFeelingsContext()

  const onListMessages = async () => {
    await getMessagesByChatroomId(chatroomSelected).then((resp: any) => {
      setChatroomMessages(resp?.data)
    })
  }

  const onCreateMessage = async (message: IMessage) => {
    await createMessage(message).then(() => onListMessages())
  }

  const onGetChatroomDetails = async () => {
    await getChatroomById(chatroomSelected).then((resp) => {
      setChatroomDetails(resp?.data?.[0])
    })
  }

  const onDeleteChatroom = async () => {
    await deleteChatroom(chatroomSelected).then((resp) => {
      listChatroomsService(1)
    })
  }

  useEffect(() => {
    if (chatroomSelected) {
      onListMessages()
      onGetChatroomDetails()
    }
  }, [chatroomSelected])

  return {
    getMessagesByChatroomId,
    onCreateMessage,
    chatroomMessages,
    chatroomDetails,
    onDeleteChatroom,
  }
}
