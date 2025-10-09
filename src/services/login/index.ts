import axios from "axios";
import type { ILoginCredentials } from "./types";

export const validateLoginService = (body: ILoginCredentials) => {
  return axios.post("http://localhost:5000/users/login", body);
};
