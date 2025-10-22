import { Routes, Route } from "react-router-dom"
import { Home } from "../pages"
import { Chat } from "../pages/Chat"

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/account" element={<Account />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/Chat" element={<Chat />} />
    </Routes>
  )
}

export default AppRoutes
