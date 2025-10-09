import React, { createContext, useContext, type ReactNode } from "react"
import { useChatList } from "../hooks/useChatList"
import type { IChatroom } from "../../../services/chatroom/types"
import type { IMessage } from "../../../services/messages/types"

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
  } = useChatList()
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
