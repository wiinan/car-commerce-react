import React from "react";
import { Header } from "../../components";
import LoginIcon from "@mui/icons-material/Login";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";

export default function HeaderTemplate({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.LogoContainer>
            <Header.LogoText>
              <Header.Rotate>
                <DirectionsCarFilledOutlinedIcon fontSize="large" /> CarStore
              </Header.Rotate>
            </Header.LogoText>
          </Header.LogoContainer>
          <Header.Frame>
            <Header.TextLink href={"/"}>Inicio</Header.TextLink>
            <Header.TextLink>Loja</Header.TextLink>
            <Header.TextLink>Perfil</Header.TextLink>
            <Header.ColorButton variant="outlined" startIcon={<LoginIcon />}>
              Login
            </Header.ColorButton>
          </Header.Frame>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}
