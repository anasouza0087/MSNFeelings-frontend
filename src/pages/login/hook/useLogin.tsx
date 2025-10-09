import { useNavigate } from "react-router";
import { validateLoginService } from "../../../services";
import type { ILoginCredentials } from "../types";

export const useLogin = () => {
  const navigate = useNavigate();

  const onValidateLogin = (loginCredentials: ILoginCredentials) => {
    const { email, password } = loginCredentials;
    if (!email || !password) return;

    validateLoginService(loginCredentials).then(() => navigate("/Chat"));
  };

  return { onValidateLogin };
};
