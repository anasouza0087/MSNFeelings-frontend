import { useChatContext } from "../context/useChatContext";

export const ChatMessages = () => {
  const { chatroomMessages } = useChatContext();

  const handleSenderBubble = (chatMessage) => {
    const date = new Date(chatMessage?.createdAt);
    const formattedDate = `${String(date?.getDate())?.padStart(
      2,
      "0"
    )}/${String(date?.getMonth() + 1)?.padStart(
      2,
      "0"
    )}/${date?.getFullYear()} ${String(date?.getHours())?.padStart(
      2,
      "0"
    )}:${String(date?.getMinutes())?.padStart(2, "0")}`;

    return (
      <div
        style={{
          width: 360,
          minHeight: 80,
          backgroundColor:
            chatMessage?.direction === "in" ? "blue" : "lightblue",
          color: chatMessage?.direction === "in" ? "#fff" : "#000",
          borderRadius: 20,
          padding: 10,
          position: "relative",
        }}
      >
        {chatMessage?.content}
        <span
          style={{
            position: "absolute",
            right: 10,
            bottom: 10,
            color: chatMessage?.direction === "in" ? "#fff" : "#000",
            fontWeight: "lighter",
            fontStyle: "italic",
            fontSize: 12,
          }}
        >
          {formattedDate}
        </span>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        // height: "100%",
        flexDirection: "column",
        // justifyContent: "flex-start",
        maxHeight: "calc(100vh - 70px)",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {chatroomMessages?.map((chatroomMessage) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems:
                chatroomMessage?.direction === "in" ? "flex-start" : "flex-end",
              padding: 40,
            }}
          >
            {handleSenderBubble(chatroomMessage)}
          </div>
        );
      })}
    </div>
  );
};
