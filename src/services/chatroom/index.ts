import axios from "axios"
import type { IChatroom } from "./types"

export const createChatroomService = (body: IChatroom) => {
  return axios.post("http://localhost:5000/chatroom", body)
}

export const listChatroomsService = (page?: number, filter?: string) => {
  const userId = "68759721b0c74a9c173b38ae"
  let url = `http://localhost:5000/chatroom?limit=10&userId=${userId}`
  if (filter) url += `&name=${filter}`
  else if (page) url += `&page=${page}`
  return axios.get(url)
}

export const getChatroomById = (chatroomId: string) => {
  return axios.get(`http://localhost:5000/chatroom/${chatroomId}`)
}

export const deleteChatroom = (chatroomId: string) => {
  return axios.delete(`http://localhost:5000/chatroom/${chatroomId}`)
}
