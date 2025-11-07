import React, { createContext, useContext, type ReactNode } from "react"
import { useMsnFeelings } from "../hooks/useMsnFeelings"

type IMsnFeelings = {
  chatroomSelected: string
  setChatroomSelected: React.Dispatch<React.SetStateAction<string>>
  onReadMessages: (chatroomId: string) => void
}

const msnFeelingsContext = createContext<IMsnFeelings | undefined>(undefined)

export const MsnFeelingsProvider = ({ children }: { children: ReactNode }) => {
  const { chatroomSelected, setChatroomSelected, onReadMessages } =
    useMsnFeelings()
  return (
    <msnFeelingsContext.Provider
      value={{
        chatroomSelected,
        setChatroomSelected,
        onReadMessages,
      }}
    >
      {children}
    </msnFeelingsContext.Provider>
  )
}

export const useMsnFeelingsContext = (): IMsnFeelings => {
  const context = useContext(msnFeelingsContext)
  if (!context) {
    throw new Error(
      "useMsnFeelingsContext must be used within a MsnFeelingsProvider"
    )
  }
  return context
}
