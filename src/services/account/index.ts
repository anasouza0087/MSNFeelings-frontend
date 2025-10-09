import axios from "axios";
import type { ICreateAccount } from "./types";

export const createAccountService = (body: ICreateAccount) => {
  return axios.post("http://localhost:5000/users", body);
};
