import { useState } from "react";
import { Modal } from "../../../ui";
import { useChatListContext } from "../context/useChatListContext";
import type { IChatroom } from "../../../services/chatroom/types";
import { List } from "./List";

export const ChatListContainer = () => {
  const {
    openCreateChatModal,
    setOpenCreateChatModal,
    onCreateChatroom,
    onListChatrooms,
  } = useChatListContext();

  const [chatroom, setChatroom] = useState<IChatroom>({ name: "" });

  return (
    <>
      <List />
      {openCreateChatModal && (
        <Modal
          onClick={() => setOpenCreateChatModal(false)}
          onSave={() =>
            onCreateChatroom(chatroom).then(() => {
              setChatroom({ name: "" });
              onListChatrooms();
            })
          }
        >
          <h3>Criar um novo chatroom</h3>
          <div style={{ padding: 8 }}>
            avatar
            <input
              placeholder="Nome do chatroom"
              style={{
                padding: 12,
                border: "1px solid #b6b5c2",
                borderRadius: 8,
                width: "100%",
              }}
              value={chatroom?.name || ""}
              onChange={(e) => setChatroom({ name: e.target.value })}
            />
          </div>
        </Modal>
      )}
    </>
  );
};
