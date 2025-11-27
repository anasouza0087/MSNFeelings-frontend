import { useNavigate } from "react-router"
import { validateLoginService } from "../../../services"
import type { ILoginCredentials } from "../types"

export const useLogin = () => {
  const navigate = useNavigate()

  const onValidateLogin = async (loginCredentials: ILoginCredentials) => {
    const { email, password } = loginCredentials
    if (!email || !password) return

    // validateLoginService(loginCredentials).then(() => {

    //   navigate("/Chat")
    // })

    const resp: any = await validateLoginService(loginCredentials)
    console.log(resp?.statusText)
    if (resp?.statusText === 'OK') {
      localStorage.setItem("token", resp?.data.token)
      navigate("/Chat")
    } else {
      throw new Error(resp?.data.error)
    }
  }

  return { onValidateLogin }
}
