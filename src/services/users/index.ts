import axios from "axios"

export const getUsersService = (
  page: number,
  filter?: { name?: string; email?: string }
) => {
  let url = `http://localhost:5000/users?limit=5&page=${page}`
  if (filter?.name) url += `&name=${filter?.name}`
  else if (filter?.email) url += `&email=${filter?.email}`
  return axios.get(url)
}
