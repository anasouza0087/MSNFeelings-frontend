import { useState } from "react";
import { ChatMessages } from "./ChatMessages";
import { useMsnFeelingsContext } from "../../shared/context/useMsnFeelingsContext";
import { useChatContext } from "../context/useChatContext";
import { ChatHeader } from "./ChatHeader";
import { ChatDetails } from "./ChatDetails";
import { AddMember } from "./AddMember";

export const ChatContainer = () => {
  const [message, setMessage] = useState<string>("");
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [openAddMember, setOpenAddMember] = useState<boolean>(false);

  const { onCreateMessage } = useChatContext();
  const { chatroomSelected } = useMsnFeelingsContext();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {!chatroomSelected ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Selecione um chat ao lado para iniciar uma conversa
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxHeight: "calc(100vh - 70px)",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <ChatHeader
              openDetails={openDetails}
              setOpenDetails={setOpenDetails}
              setOpenAddMember={setOpenAddMember}
            />
            <ChatMessages />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <textarea
                style={{
                  width: "100%",
                  height: 100,
                  borderRadius: 20,
                  padding: 8,
                  border: "1px solid blue",
                  margin: 12,
                  resize: "none",
                }}
                placeholder="Envie uma mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div
                style={{ margin: 20, cursor: "pointer" }}
                onClick={() => {
                  onCreateMessage({
                    chatroomId: chatroomSelected,
                    sender: "6866beafa381a7876376b691",
                    content: message,
                    direction: "out",
                  });
                  setMessage("");
                }}
              >
                Enviar
              </div>
            </div>
          </div>
          {openDetails && <ChatDetails setOpenDetails={setOpenDetails} />}
          {openAddMember && <AddMember />}
        </div>
      )}
    </div>
  );
};
