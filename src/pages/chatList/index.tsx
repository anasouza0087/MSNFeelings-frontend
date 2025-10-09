import { ChatListContainer } from "./components";
import { ChatListProvider } from "./context/useChatListContext";

const WrappedChatList = () => {
  return (
    <ChatListProvider>
      <ChatListContainer />
    </ChatListProvider>
  );
};

export const ChatList = () => {
  return <WrappedChatList />;
};
