import { useState } from "react";
import {
  StyledButton,
  StyledContainer,
  StyledInput,
  StyledInputLabelContainer,
} from "../login/styles";
import { useAccount } from "./hooks/useAccount";
import type { IAccount } from "./types";

export const Account = () => {
  const [account, setAccount] = useState<IAccount>({
    name: "",
    nickname: "",
    password: "",
    email: "",
  });

  const { createAccount } = useAccount();
  return (
    <StyledContainer>
      <div
        style={{
          width: "50%",
          height: "80%",
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <header
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Personal account</h1>
          <h3 style={{ color: "#b6b5c2" }}>create or edit an user account</h3>
        </header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 6,
            marginTop: 30,
            marginLeft: 30,
            width: "100%",
          }}
        >
          <StyledInputLabelContainer>
            <label style={{ fontWeight: "bold" }}>Name</label>
            <StyledInput
              placeholder="Enter your name"
              onChange={(e) => setAccount({ ...account, name: e.target.value })}
            />
          </StyledInputLabelContainer>
          <StyledInputLabelContainer>
            <label style={{ fontWeight: "bold" }}>Nickname</label>
            <StyledInput
              placeholder="Enter your nickname"
              onChange={(e) =>
                setAccount({ ...account, nickname: e.target.value })
              }
            />
          </StyledInputLabelContainer>
          <StyledInputLabelContainer>
            <label style={{ fontWeight: "bold" }}>E-Mail</label>
            <StyledInput
              placeholder="Enter your e-mail"
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
          </StyledInputLabelContainer>
          <StyledInputLabelContainer>
            <label style={{ fontWeight: "bold" }}>Password</label>
            <StyledInput
              placeholder="Enter your password"
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
          </StyledInputLabelContainer>
          <StyledButton onClick={() => createAccount(account)}>
            Create account
          </StyledButton>
        </div>
      </div>
    </StyledContainer>
  );
};
