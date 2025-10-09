export interface IMessage {
  chatroomId: string;
  sender: string;
  content: string;
  direction: "in" | "out";
}
