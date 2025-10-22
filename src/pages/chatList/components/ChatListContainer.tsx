import { useState } from "react"
import { Button, Input, Modal } from "../../../ui"
import { useChatListContext } from "../context/useChatListContext"
import type { IChatroom } from "../../../services/chatroom/types"
import { List } from "./List"
import { HiUserPlus } from "react-icons/hi2"
import { RiUserSearchFill } from "react-icons/ri"

export const ChatListContainer = () => {
  const {
    openCreateChatModal,
    setOpenCreateChatModal,
    onCreateChatroom,
    onListChatrooms,
  } = useChatListContext()

  const [chatroom, setChatroom] = useState<IChatroom>({ name: "" })

  return (
    <>
      <List />
      {openCreateChatModal && (
        <Modal
          onClose={() => setOpenCreateChatModal(false)}
          onSave={() =>
            onCreateChatroom(chatroom).then(() => {
              setChatroom({ name: "" })
              onListChatrooms()
            })
          }
        >
          <h3>Iniciar uma nova conversa</h3>
          <div style={{ padding: 8, gap: 20, margin: 8 }}>
            Buscar Contato
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Input
                onChange={() => null}
                placeholder="Nome, login ou e-mail"
              />
              <RiUserSearchFill onClick={() => null} fontSize={30} />
            </div>
            <div
              style={{
                marginTop: 8,
                marginBottom: 8,
                overflowY: "scroll",
                maxHeight: 200,
              }}
            >
              Selecione um contato:
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 20,
                  padding: 8,
                }}
              >
                <HiUserPlus fontSize={24} color="green" />
                <span style={{ color: "grey" }}>fulano de tal</span>
              </div>
            </div>
            <div>
              Mensagem (opcional)
              <Input onChange={() => null} placeholder="Digite uma mensagem " />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
