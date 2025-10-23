import { useAccount } from "../../hook/useAccount"
import { Button, Input, Uploader } from "../../../../ui"

interface createUserTypes {
  isLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateUser = ({ isLogin }: createUserTypes) => {
  const { createAccount, handleChangeUser } = useAccount()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // borderRadius: 14,
        // backgroundColor: "#cfdfef",
        // width: 500,
        height: 600,
        // padding: 40,
      }}
    >
      <h2>Create your account</h2>
      <Uploader onChange={(mediaUrl) => handleChangeUser("avatar", mediaUrl)} />
      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <Input
          label="Nome"
          onChange={(e) => handleChangeUser("name", e.target.value)}
          placeholder="Insira seu Nome"
        />
        <Input
          label="E-Mail"
          onChange={(e) => handleChangeUser("email", e.target.value)}
          placeholder="Insira um e-mail válido"
        />
        <Input
          label="Senha"
          onChange={(e) => handleChangeUser("password", e.target.value)}
          placeholder="Insira sua senha"
        />
      </section>
      <section style={{ width: "100%" }}>
        <Button label="Sign Up" onClick={createAccount} />
      </section>
      <h4>
        Já tem uma conta?{" "}
        <b
          style={{ color: "#3686de", cursor: "pointer" }}
          onClick={() => isLogin(true)}
        >
          Faça login
        </b>
        .
      </h4>
    </div>
    //div>
  )
}
