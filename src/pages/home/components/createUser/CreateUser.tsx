// import { useState } from "react"
// import type { IAccount } from "../../types"
// import { useAccount } from "../../hook/useAccount"
import { Button, Input, Uploader } from "../../../../ui"

interface createUserTypes {
  isLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateUser = ({ isLogin }: createUserTypes) => {
  // const [account, setAccount] = useState<IAccount>({
  //   name: "",
  //   nickname: "",
  //   password: "",
  //   email: "",
  // })

  // const { createAccount } = useAccount()
  return (
    // <StyledContainer>
    //   <div
    //     style={{
    //       width: "50%",
    //       height: "80%",
    //       padding: 20,
    //       backgroundColor: "#fff",
    //     }}
    //   >
    //     <header
    //       style={{
    //         width: "100%",
    //         display: "flex",
    //         flexDirection: "column",
    //       }}
    //     >
    //       <h1>Personal account</h1>
    //       <h3 style={{ color: "#b6b5c2" }}>create or edit an user account</h3>
    //     </header>
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "flex-start",
    //         padding: 6,
    //         marginTop: 30,
    //         marginLeft: 30,
    //         width: "100%",
    //       }}
    //     >
    //       <StyledInputLabelContainer>
    //         <label style={{ fontWeight: "bold" }}>Name</label>
    //         <StyledInput
    //           placeholder="Enter your name"
    //           onChange={(e) => setAccount({ ...account, name: e.target.value })}
    //         />
    //       </StyledInputLabelContainer>
    //       <StyledInputLabelContainer>
    //         <label style={{ fontWeight: "bold" }}>Nickname</label>
    //         <StyledInput
    //           placeholder="Enter your nickname"
    //           onChange={(e) =>
    //             setAccount({ ...account, nickname: e.target.value })
    //           }
    //         />
    //       </StyledInputLabelContainer>
    //       <StyledInputLabelContainer>
    //         <label style={{ fontWeight: "bold" }}>E-Mail</label>
    //         <StyledInput
    //           placeholder="Enter your e-mail"
    //           onChange={(e) =>
    //             setAccount({ ...account, email: e.target.value })
    //           }
    //         />
    //       </StyledInputLabelContainer>
    //       <StyledInputLabelContainer>
    //         <label style={{ fontWeight: "bold" }}>Password</label>
    //         <StyledInput
    //           placeholder="Enter your password"
    //           onChange={(e) =>
    //             setAccount({ ...account, password: e.target.value })
    //           }
    //         />
    //       </StyledInputLabelContainer>
    //       <StyledButton onClick={() => createAccount(account)}>
    //         Create account
    //       </StyledButton>
    //     </div>
    //   </div>
    // </StyledContainer>
    // <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
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
      <Uploader />
      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignContent: "center",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <Input label="Nome" onChange={() => null} />
        <Input label="Login" onChange={() => null} />
        <Input label="E-Mail" onChange={() => null} />
        <Input label="Senha" onChange={() => null} />
      </section>
      <section style={{ width: "100%" }}>
        <Button label="Sign Up" onClick={() => null} />
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
