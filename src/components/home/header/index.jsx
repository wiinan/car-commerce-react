import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  LogoContainer,
  LogoText,
  Group,
  PlayButton,
  Background,
  Container,
  Profile,
  Dropdown,
  Picture,
  ButtonLink,
  Text,
  Link,
  FeatureCallOut,
  Search,
  SearchIcon,
  SearchInput,
  Rotate,
  ColorButton,
} from "./layout";

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.LogoContainer = function HeaderLogoContainer({
  children,
  ...restProps
}) {
  return <LogoContainer {...restProps}>{children}</LogoContainer>;
};

Header.LogoText = function HeaderLogoText({ children, ...restProps }) {
  return <LogoText {...restProps}>{children}</LogoText>;
};

Header.Rotate = function HeaderRotate({ children, ...restProps }) {
  return <Rotate {...restProps}>{children}</Rotate>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.ColorButton = function HeaderColorButton({ children, ...restProps }) {
  return <ColorButton {...restProps}>{children}</ColorButton>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src} />;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
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

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
