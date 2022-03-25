import React from "react";
import { Header } from "../../components";
import LoginIcon from "@mui/icons-material/Login";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import { useNavigate } from "react-router-dom";

export default function HeaderTemplate({ children }) {
  const navigate = useNavigate();
  const handleRedirect = url => navigate(url);

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.LogoContainer>
            <Header.LogoText>
              <Header.Rotate>
                <DirectionsCarFilledOutlinedIcon onClick={() => handleRedirect('/')} fontSize="large" /> CarStore
              </Header.Rotate>
            </Header.LogoText>
          </Header.LogoContainer>
          <Header.Frame>
            <Header.TextLink onClick={() => handleRedirect('/')}>Inicio</Header.TextLink>
            <Header.TextLink>Loja</Header.TextLink>
            <Header.TextLink>Perfil</Header.TextLink>
            <Header.ColorButton onClick={() => handleRedirect('/login')} variant="outlined" startIcon={<LoginIcon />}>
              Login
            </Header.ColorButton>
          </Header.Frame>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}
