import React, { createContext, useContext, type ReactNode } from "react";
import type { IMessage } from "../../../services/messages/types";
import { useChatMessages } from "../hooks/useChatMessages";

type IChat = {
  chatroomMessages: any[];
  onCreateMessage: (message: IMessage) => void;
  chatroomDetails: { _id: string; name: string };
};

const chatContext = createContext<IChat | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { chatroomMessages, onCreateMessage, chatroomDetails } =
    useChatMessages();
  return (
    <chatContext.Provider
      value={{
        chatroomMessages,
        onCreateMessage,
        chatroomDetails,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

export const useChatContext = (): IChat => {
  const context = useContext(chatContext);
  if (!context) {
    throw new Error("useChatListContext must be used within a ChatProvider");
  }
  return context;
};
