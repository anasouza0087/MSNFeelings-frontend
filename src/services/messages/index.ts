import axios from "axios"
import type { IMessage } from "./types"

export const createMessage = (body: IMessage) => {
  return axios.post("http://localhost:5000/messages", { ...body })
}

export const getMessagesByChatroomId = (chatroomId: string) => {
  return axios.get(`http://localhost:5000/messages/${chatroomId}`)
}

export const onReadMessageService = (userId: string, chatroomId: string) => {
  return axios.patch(`http://localhost:5000/messages/${chatroomId}/read`, {
    userId,
  })
}
