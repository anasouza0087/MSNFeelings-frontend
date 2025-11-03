import { FaEllipsisV } from "react-icons/fa"
import { useChatContext } from "../context/useChatContext"
import { HiUserGroup } from "react-icons/hi"
import { CiCircleRemove } from "react-icons/ci"
import { useState } from "react"
import { faker } from "@faker-js/faker"

interface IChatHeader {
  openDetails: boolean
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>
  setOpenAddMember: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChatHeader = ({ openDetails, setOpenDetails }: IChatHeader) => {
  const [openMenu, setOpenMenu] = useState(false)
  const { chatroomDetails } = useChatContext()

  return (
    <div
      style={{
        width: "100%",
        padding: 20,
        backgroundColor: "#eeeeee",
        height: 80,
      }}
    >
      <div
        style={{
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
            cursor: "pointer",
          }}
        >
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

          <b style={{ marginLeft: 8 }}>{chatroomDetails?.user?.name}</b>
        </div>
        <div style={{ position: "relative" }}>
          <FaEllipsisV
            style={{ fontSize: 20, cursor: "pointer" }}
            onClick={() => setOpenMenu(!openMenu)}
          />
          {openMenu && (
            <div
              style={{
                position: "absolute",
                top: 30,
                right: 20,
                backgroundColor: "lightgray",
                borderRadius: 4,
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: 8,
                zIndex: 80,
                opacity: 0.8,
                height: 70,
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpenDetails(!openDetails)
                  setOpenMenu(false)
                }}
              >
                <HiUserGroup fontSize={20} />
                <i style={{ marginLeft: 12 }}>Detalhes da Conversa</i>
              </span>

              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <CiCircleRemove fontSize={20} />
                <i style={{ marginLeft: 12 }}>Excluir Conversa</i>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
