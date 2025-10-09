import { useEffect, useState } from "react";
import {
  createMessage,
  getChatroomById,
  getMessagesByChatroomId,
} from "../../../services";
import { useMsnFeelingsContext } from "../../shared/context/useMsnFeelingsContext";

export const useChatMessages = () => {
  const [chatroomMessages, setChatroomMessages] = useState<any[]>([]);
  const [chatroomDetails, setChatroomDetails] = useState<{
    _id: string;
    name: string;
  }>({ _id: "", name: "" });
  const { chatroomSelected } = useMsnFeelingsContext();

  const onListMessages = async () => {
    await getMessagesByChatroomId(chatroomSelected).then((resp: any) => {
      setChatroomMessages(resp?.data);
    });
  };

  const onCreateMessage = async (message: IMessage) => {
    await createMessage(message).then(() => onListMessages());
  };

  const onGetChatroomDetails = async () => {
    await getChatroomById(chatroomSelected).then((resp) => {
      setChatroomDetails(resp?.data?.[0]);
    });
  };

  useEffect(() => {
    if (chatroomSelected) {
      onListMessages();
      onGetChatroomDetails();
    }
  }, [chatroomSelected]);

  return {
    getMessagesByChatroomId,
    onCreateMessage,
    chatroomMessages,
    chatroomDetails,
  };
};
