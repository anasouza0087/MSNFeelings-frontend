import { ChatContainer } from "./components/ChatContainer";
import { ChatProvider } from "./context/useChatContext";

const WrappedChatMessages = () => {
  return (
    <ChatProvider>
      <ChatContainer />
    </ChatProvider>
  );
};

export const ChatMessages = () => {
  return <WrappedChatMessages />;
};
