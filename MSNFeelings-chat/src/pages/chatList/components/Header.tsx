import { FaSearch } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useChatListContext } from "../context/useChatListContext";
import { useState } from "react";

export const Header = () => {
  const {
    setOpenCreateChatModal,
    onFilterChatrooms,
    onListChatrooms,
    setIsFilter,
  } = useChatListContext();
  const [chatroom, setChatroom] = useState({ name: "" });
  return (
    <div
      style={{
        padding: 10,
        width: "100%",
        marginBottom: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "fit-content",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="type chatroom name"
          style={{
            padding: 12,
            border: "1px solid #b6b5c2",
            borderRadius: 8,
            width: "100%",
          }}
          value={chatroom.name}
          onChange={(e) => setChatroom({ name: e.target.value })}
        />
        <button style={{ padding: 8, marginLeft: 4 }}>
          <FaSearch
            fontSize={20}
            onClick={() => {
              setIsFilter(true);
              onFilterChatrooms(chatroom.name);
            }}
          />
        </button>
        <button onClick={() => setOpenCreateChatModal(true)}>
          <IoIosAddCircle fontSize={30} />
        </button>
      </div>
    </div>
  );
};
