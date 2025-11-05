import React, { createContext, useContext, type ReactNode } from "react"
import { useChatList } from "../hooks/useChatList"
import type { IChatroom } from "../../../services/chatroom/types"
import type { IMessage } from "../../../services/messages/types"
import { useUsers } from "../hooks/useUsers"

type IChatList = {
  openCreateChatModal: boolean
  setOpenCreateChatModal: React.Dispatch<React.SetStateAction<boolean>>
  chatrooms: any[]
  onCreateChatroom: (body: IChatroom) => Promise<any>
  chatroomMessages: any[]
  onCreateMessage: (message: IMessage) => void
  onListChatrooms: any
  hasMore: boolean
  onFilterChatrooms: (chatroomName: string) => void
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
  setIsLoading: any
  listUsers: (params: any) => Promise<any>
  users: any[]
}

const chatListContext = createContext<IChatList | undefined>(undefined)

export const ChatListProvider = ({ children }: { children: ReactNode }) => {
  const {
    openCreateChatModal,
    setOpenCreateChatModal,
    chatrooms,
    onCreateChatroom,
    onListChatrooms,
    hasMore,
    onFilterChatrooms,
    setIsFilter,
    isLoading,
    setIsLoading,
  } = useChatList()

  const { listUsers, users } = useUsers()

  return (
    <chatListContext.Provider
      value={{
        openCreateChatModal,
        setOpenCreateChatModal,
        chatrooms,
        onCreateChatroom,
        onListChatrooms,
        onFilterChatrooms,
        hasMore,
        setIsFilter,
        isLoading,
        setIsLoading,
        listUsers,
        users,
      }}
    >
      {children}
    </chatListContext.Provider>
  )
}

export const useChatListContext = (): IChatList => {
  const context = useContext(chatListContext)
  if (!context) {
    throw new Error("useChatListContext must be used within a ChatListProvider")
  }
  return context
}
