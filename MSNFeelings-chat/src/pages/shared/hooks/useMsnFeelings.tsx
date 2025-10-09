import { useState } from "react";

export const useMsnFeelings = () => {
  const [chatroomSelected, setChatroomSelected] = useState<string>("");

  return {
    chatroomSelected,
    setChatroomSelected,
  };
};
