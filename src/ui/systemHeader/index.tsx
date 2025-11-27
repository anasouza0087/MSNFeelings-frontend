import { IoLogOut } from "react-icons/io5"
import { useNavigate } from "react-router"

export const SystemHeader = () => {
  const navigate = useNavigate()

  const userlogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0078D7",
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        padding: 20,
        color: "#fff",
        marginBottom: 12,
      }}
    >
      <div>LOGO</div>
      <IoLogOut fontSize={30} cursor={"pointer"} onClick={userlogout} />
    </div>
  )
}
