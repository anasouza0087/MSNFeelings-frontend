import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ICreateAccount } from "../../../services/account/types";
import { createAccountService } from "../../../services";

export const useAccount = () => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const createAccount = async (newAccount: ICreateAccount) => {
    const { name, nickname, email, password } = newAccount;
    if (!name || !nickname || !email || !password) {
      setError(true);
      return "";
    }

    return await createAccountService(newAccount).then(() => navigate("/"));
  };

  return {
    createAccount,
    error,
  };
};
