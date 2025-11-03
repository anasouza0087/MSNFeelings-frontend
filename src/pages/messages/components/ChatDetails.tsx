import { IoClose } from "react-icons/io5"
import { useChatContext } from "../context/useChatContext"
import { faker } from "@faker-js/faker"

interface IChatDetails {
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChatDetails = ({ setOpenDetails }: IChatDetails) => {
  const { chatroomDetails, onDeleteChatroom } = useChatContext()
  return (
    <div
      style={{
        padding: 20,
        width: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: " #EEEEEE",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <IoClose
          fontSize={24}
          onClick={() => setOpenDetails(false)}
          cursor={"pointer"}
        />
        <h3 style={{ marginLeft: 20 }}>Detalhes da conversa</h3>
      </div>
      {chatroomDetails?.user?.avatar ? (
        <img
          src={chatroomDetails?.user?.avatar}
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
          {chatroomDetails?.user?.name.split("")?.[0]?.toUpperCase()}
        </div>
      )}
      <h2>{chatroomDetails?.user?.name}</h2>

      <div
        style={{ width: "100%", textAlign: "center", cursor: "pointer" }}
        onClick={() => onDeleteChatroom()}
      >
        <h3 style={{ color: "red", fontWeight: "bold" }}>Excluir Conversa</h3>
      </div>
    </div>
  )
}
