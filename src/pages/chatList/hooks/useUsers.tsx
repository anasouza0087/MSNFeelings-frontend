import { useState } from "react"
import { getUsersService } from "../../../services"

export const useUsers = () => {
  const [users, setUsers] = useState([])

  const listUsers = (filter?: string) => {
    let params = undefined
    if (filter && filter.includes("@")) {
      params = {
        email: filter,
      }
    } else {
      params = {
        name: filter,
      }
    }
    getUsersService(1, params).then((resp) => {
      setUsers(resp?.data?.results)
    })
  }

  return {
    listUsers,
    users,
  }
}
