import { Skeleton } from "../../../ui"
import { useMsnFeelingsContext } from "../../shared/context/useMsnFeelingsContext"
import { useChatListContext } from "../context/useChatListContext"
import { Header } from "./Header"

export const List = () => {
  const { chatrooms, isLoading } = useChatListContext()

  const { setChatroomSelected, chatroomSelected } = useMsnFeelingsContext()

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
      <Header />
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
          }}
          onClick={() => {
            setChatroomSelected(chatroom._id)
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
              <div
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "yellow",
                  borderRadius: "100%",
                }}
              ></div>
              <h4
                style={{
                  fontWeight: "bold",
                  color: "#0078d7",
                  textAlign: "left",
                  marginLeft: 20,
                }}
              >
                {chatroom?.name}
              </h4>
            </div>
            <span>3m</span>
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
                height: 50,
                width: "90%",
              }}
            >
              Prévia da última mensagem...
            </p>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "100%",
                backgroundColor: "#0078d7",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              2
            </div>
          </div>
        </div>
      ))}
      {isLoading && <Skeleton />}
      <div id="sentinel" style={{ height: "20px" }}></div>
    </div>
  )
}
