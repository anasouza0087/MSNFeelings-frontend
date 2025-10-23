import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createAccountService } from "../../../services"
import type { IAccount } from "../types"

export const useAccount = () => {
  const [error, setError] = useState<boolean>(false)
  const [user, setUser] = useState<IAccount>({
    avatar: "",
    name: "",
    password: "",
    email: "",
  })
  const navigate = useNavigate()

  const createAccount = async () => {
    if (!user?.name || !user?.email || !user?.password) {
      setError(true)
      return ""
    }

    return await createAccountService(user).then(() => navigate("/"))
  }

  const handleChangeUser = (name: string, value: any) => {
    setUser({
      ...user,
      [name]: value,
    })
  }

  return {
    createAccount,
    error,
    handleChangeUser,
  }
}
