import { useState } from "react"
import { Input, Modal } from "../../../ui"
import { useChatListContext } from "../context/useChatListContext"
import type { IChatroom } from "../../../services/chatroom/types"
import { List } from "./List"
import { HiUserPlus } from "react-icons/hi2"
import { RiUserSearchFill } from "react-icons/ri"

import { faker } from "@faker-js/faker"

export const ChatListContainer = () => {
  const {
    openCreateChatModal,
    setOpenCreateChatModal,
    onCreateChatroom,
    onListChatrooms,
    listUsers,
    users,
    setIsLoading,
  } = useChatListContext()

  const [chatroom, setChatroom] = useState<IChatroom>({
    participants: [],
    message: "",
  })

  const [filter, setFilter] = useState("")

  return (
    <>
      <List />
      {openCreateChatModal && (
        <Modal
          onClose={() => setOpenCreateChatModal(false)}
          onSave={() =>
            onCreateChatroom(chatroom).then(() => {
              setChatroom({
                participants: [],
                message: "",
              })
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
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Nome ou E-Mail"
              />
              <RiUserSearchFill
                onClick={() => listUsers(filter)}
                fontSize={30}
              />
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
              {users?.map((user) => {
                return (
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
                    <HiUserPlus
                      fontSize={24}
                      color={
                        chatroom?.participants?.length > 0 ? "red" : "green"
                      }
                      onClick={() =>
                        setChatroom({
                          ...chatroom,
                          participants: [
                            {
                              id: user._id,
                              name: user.name,
                              avatar: user?.avatar ?? "",
                            },
                            {
                              id: "68759721b0c74a9c173b38ae",
                              name: "admin",
                              avatar: "",
                            },
                          ],
                        })
                      }
                    />
                    <span style={{ color: "grey" }}>{user?.name}</span>

                    {user?.avatar ? (
                      <img
                        src={user?.avatar}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          objectFit: "cover",
                          objectPosition: "center",
                          border: "2px solid #ccc",
                          boxShadow: "0 0 4px rgba(0,0,0,0.1)",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          border: "2px solid #ccc",
                          boxShadow: "0 0 4px rgba(0,0,0,0.1)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: "bold",
                          color: "#fff",
                          backgroundColor: faker.color.rgb({ format: "css" }),
                        }}
                      >
                        {user?.name.split("")?.[0]?.toUpperCase()}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div>
              Mensagem (opcional)
              <Input
                onChange={(e) =>
                  setChatroom({
                    ...chatroom,
                    message: e.target.value,
                  })
                }
                value={chatroom?.message}
                placeholder="Digite ua mensagem "
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
