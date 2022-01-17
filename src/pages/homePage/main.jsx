import React from "react";
import { Main } from "../../components";
import logo from "../../assets/images/blob.svg";
import macLaren from "../../assets/images/mclaren-orange-big.png";

export default function MainTemplate() {
  return (
    <>
      <Main>
        <Main.Frame>
          <Main.LeftContainer>
            <Main.Slongan>Bem vindo Wiinan</Main.Slongan>
            <Main.SlonganStore>TESTING BIG TEXT HERE</Main.SlonganStore>
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
