import React from "react";
import { Main, Header } from "../../components";
import logo from "../../assets/images/blob.svg";
import macLaren from "../../assets/images/mclaren-orange-big.png";

export default function MainTemplate() {
  return (
    <>
      <Main>
        <Main.Frame>
          <Main.LeftContainer>
            <Main.Slongan>Bem vindo Wiinan</Main.Slongan>
            <Main.SlonganStore>
              COMPRE E VENDA OS MELHORES CARROS DA ATUALIDADE
            </Main.SlonganStore>
            <Main.TextSideLeft>
              Entre na loja e adiquira os melhores produtos e mais de alta
              qualidade
            </Main.TextSideLeft>
            <Main.TextSideLeft>
              Registre-se ou faça login para conseguir adiquirir com seguraça os
              nossos produtos
            </Main.TextSideLeft>
            <Main.Group>
              <Header.PlayButton>Login</Header.PlayButton>
              <Header.PlayButtonSecundary>Registrar</Header.PlayButtonSecundary>
            </Main.Group>
          </Main.LeftContainer>
          <Main.RightContainer>
            <Main.Logo src={logo} />
            <Main.LogoCar src={macLaren} />
          </Main.RightContainer>
        </Main.Frame>
      </Main>
    </>
  );
}
