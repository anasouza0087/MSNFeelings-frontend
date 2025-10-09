import { SystemHeader } from "../../ui";
import { ChatList } from "../chatList";
import { ChatMessages } from "../messages";
import { MsnFeelingsProvider } from "../shared/context/useMsnFeelingsContext";

const WrappedChat = () => {
  return (
    <MsnFeelingsProvider>
      <ChatList />
      <ChatMessages />
    </MsnFeelingsProvider>
  );
};

export const Chat = () => {
  return (
    <>
      <SystemHeader />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <WrappedChat />;
      </div>
    </>
  );
};
