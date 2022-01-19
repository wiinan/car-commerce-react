import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  Logo,
  LogoCar,
  PlayButton,
  TopSectionContainer,
  Container,
  Dropdown,
  Picture,
  ButtonLink,
  Text,
  Link,
  Search,
  SearchIcon,
  SearchInput,
  LeftContainer,
  RightContainer,
  Slongan,
  SlonganStore,
  TextSideLeft,
  Group,
} from "./style";

export default function Main({ children, ...restProps }) {
  return <TopSectionContainer {...restProps}>{children}</TopSectionContainer>;
}

Main.Button = function MainButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Main.Frame = function MainFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Main.LeftContainer = function MainLeftContainer({ children, ...restProps }) {
  return <LeftContainer {...restProps}>{children}</LeftContainer>;
};

Main.RightContainer = function MainRightContainer({ children, ...restProps }) {
  return <RightContainer {...restProps}>{children}</RightContainer>;
};

Main.Slongan = function MainSlongan({ children, ...restProps }) {
  return <Slongan {...restProps}>{children}</Slongan>;
};

Main.SlonganStore = function SlonganStoreStore({ children, ...restProps }) {
  return <SlonganStore {...restProps}>{children}</SlonganStore>;
};

Main.TextSideLeft = function TextSideLeftStore({ children, ...restProps }) {
  return <TextSideLeft {...restProps}>{children}</TextSideLeft>;
};

Main.Dropdown = function MainDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Main.Text = function MainText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Main.TextLink = function MainTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Main.PlayButton = function MainPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Main.Picture = function MainPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src} />;
};
Main.Search = function MainSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
        data-testid="search-click"
      ></SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search film and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};
Main.Frame = function MainFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Main.ButtonLink = function MainButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Main.Logo = function MainLogo({ to, ...restProps }) {
  return <Logo {...restProps} />;
};
Main.LogoCar = function MainLogoCar({ to, ...restProps }) {
  return <LogoCar {...restProps} />;
};

Main.Group = function MainGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
