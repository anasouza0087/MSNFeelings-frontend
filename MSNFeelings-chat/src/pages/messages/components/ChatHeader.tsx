import { FaEllipsisV } from "react-icons/fa";
import { useChatContext } from "../context/useChatContext";
import { HiUserGroup } from "react-icons/hi";
import { CiCircleRemove } from "react-icons/ci";
import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";

interface IChatHeader {
  openDetails: boolean;
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAddMember: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatHeader = ({
  openDetails,
  setOpenDetails,
  setOpenAddMember,
}: IChatHeader) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { chatroomDetails } = useChatContext();

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
          <span
            style={{
              width: 30,
              height: 30,
              border: "1px solid #000",
              borderRadius: "100%",
            }}
          />
          <b style={{ marginLeft: 8 }}>{chatroomDetails?.name}</b>
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
                height: 100,
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  // marginBottom: 12,
                  cursor: "pointer",

                }}
                onClick={() => {
                  setOpenDetails(!openDetails);
                  setOpenMenu(false);
                }}
              >
                <HiUserGroup fontSize={20} />
                <i style={{ marginLeft: 12 }}>Detalhes do Grupo</i>
              </span>

              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setOpenAddMember(true)}
              >
                <IoPersonAddSharp fontSize={18} />
                <i style={{ marginLeft: 12 }}>Adicionar novo membro</i>
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
                <i style={{ marginLeft: 12 }}>Sair do Grupo</i>
              </span>
            </div>
          )}
        </div>
      </div>
      <p style={{ fontStyle: "italic", padding: 8 }}>
        chiquinha, chaves, nhonho
      </p>
    </div>
  );
};
