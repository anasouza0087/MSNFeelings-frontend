import { Routes, Route } from "react-router-dom";
import { Login } from "../pages";
import { Account } from "../pages/account";
import { Chat } from "../pages/Chat";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/Chat" element={<Chat />} />
    </Routes>
  );
}

export default AppRoutes;
