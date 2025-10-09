import { IoClose } from "react-icons/io5";
import { useChatContext } from "../context/useChatContext";

interface IChatDetails {
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatDetails = ({ setOpenDetails }: IChatDetails) => {
  const { chatroomDetails } = useChatContext();
  return (
    <div
      style={{
        padding: 20,
        width: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: " #EEEEEE",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <IoClose
          fontSize={24}
          onClick={() => setOpenDetails(false)}
          cursor={"pointer"}
        />
        <h3 style={{ marginLeft: 20 }}>Detalhes do Grupo</h3>
      </div>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "100%",
          border: "1px solid #000",
          margin: 18,
        }}
      ></div>
      <h2>{chatroomDetails.name}</h2>
      <h5 style={{ cursor: "pointer" }}>Grupo - xxx membros</h5>
    </div>
  );
};
