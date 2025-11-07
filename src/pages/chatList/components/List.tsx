import { faker } from "@faker-js/faker"
import moment from "moment"
// @ts-expect-error ignore Moment TS error
import "moment/dist/locale/pt-br.js"

import { Skeleton } from "../../../ui"
import { useMsnFeelingsContext } from "../../shared/context/useMsnFeelingsContext"
import { useChatListContext } from "../context/useChatListContext"
import { Header } from "./Header"

export const List = () => {
  const { chatrooms, isLoading } = useChatListContext()

  const { setChatroomSelected, chatroomSelected, onReadMessages } =
    useMsnFeelingsContext()

  const MessageTime = (updatedAt: string) => {
    return <span>{moment(updatedAt).locale("pt-br").fromNow()}</span>
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        width: 700,
        maxHeight: "calc(100vh - 70px)",
        overflowY: "auto",
        overflowX: "hidden",
        padding: 20,
      }}
    >
      <div
        style={{ position: "sticky", top: 0, zIndex: 10, background: "#fff" }}
      >
        <Header />
      </div>
      {chatrooms?.map((chatroom, idx) => (
        <div
          key={idx}
          style={{
            padding: 20,
            width: "100%",
            border: "1px solid #b6b5c2",
            cursor: "pointer",
            margin: 4,
            height: 140,
            backgroundColor:
              chatroom._id === chatroomSelected ? "	#eeeeee" : "#fff",
            position: "relative",
          }}
          onClick={() => {
            setChatroomSelected(chatroom._id)
            onReadMessages(chatroom._id)
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {chatroom?.participants?.find(
                (x) => x.id !== "68759721b0c74a9c173b38ae"
              )?.avatar ? (
                <img
                  src={
                    chatroom?.participants?.find(
                      (x) => x.id !== "68759721b0c74a9c173b38ae"
                    )?.avatar
                  }
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
                  {chatroom?.participants
                    ?.find((x) => x.id !== "68759721b0c74a9c173b38ae")
                    ?.name.split("")?.[0]
                    ?.toUpperCase()}
                </div>
              )}
              <h4
                style={{
                  fontWeight: "bold",
                  color: "#0078d7",
                  textAlign: "left",
                  marginLeft: 20,
                }}
              >
                {chatroom?.participants?.find(
                  (x) => x.id !== "68759721b0c74a9c173b38ae"
                )?.name ?? "Usuário desconhecido"}
              </h4>
            </div>
            <span>{MessageTime(chatroom?.updatedAt)}</span>
          </div>

          <div
            style={{
              margin: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <p
              style={{
                overflow: "hidden",
                // height: 50,
                width: "90%",
                fontWeight: chatroom?.hasUnread ? 'bold' : 'lighter'
              }}
            >
              {chatroom?.message}
            </p>
            {chatroom?.hasUnread && (
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "100%",
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              />
            )}
          </div>
        </div>
      ))}
      {isLoading && <Skeleton />}
      <div id="sentinel" style={{ height: "20px" }}></div>
    </div>
  )
}
