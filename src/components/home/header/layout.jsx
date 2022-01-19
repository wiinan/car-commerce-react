import css from "styled-components/macro";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#fa483e"),
  backgroundColor: "#fa483e",
  "&:hover": {
    backgroundColor: "#fc0d00",
  },
}));

export const Rotate = css.div`
  display: inline-block;
  color: ${(props) => props.theme.primaryColor};
`;

export const Background = css.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && "background:none;"};
  }
`;

export const Container = css.div`
  display: flex;
  z-index: 500;
  margin: 0 56px;
  height: 3rem;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;
export const LogoContainer = css.div`
  display: flex;
  align-items: center;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
export const LogoText = css.div`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontIcon};
  color: black;
  font-size: 1.5rem;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
export const Picture = css.button`
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Group = css.div`
  display: flex;
  align-items: center;
`;

export const Link = css.a`
  color: black;
  text-decoration: none;
  margin-right: 2rem;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: ${(props) => props.theme.primaryColor};
    border-bottom: 2px solid ${(props) => props.theme.primaryColor};
  }
`;

export const Dropdown = css.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link},${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Search = css.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const SearchIcon = css.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;
export const PlayButton = css.button`
    box-shadow:0 0.6vw 1vw -0.4vw rgba(0,0,0,0.35);
    background-color:${(props) => props.theme.primaryColor};
    color: white;
    font-weight:bold;
    border-width:0;
    padding:18px 30px;
    margin-right: 3rem;
    border-radius:5px;
    max-width:130px;
    font-size:20px;
    margin-top:30px;
    cursor:pointer;
    transition:background-color:1s ease;
    &:hover{
        background-color:#ff1e1e;
        color:white;
    }
`;

export const PlayButtonSecundary = css.button`
    box-shadow:0 0.6vw 1vw -0.4vw rgba(0,0,0,0.35);
    background-color: tranparent;
    color: ${props => props.theme.contrastDefault};
    font-weight:bold;
    border:${props => props.theme.borderDefault} ${props => props.theme.contrastDefault} solid;
    padding:15px 20px;
    margin-right: 3rem;
    border-radius:5px;
    max-width:130px;
    font-size:20px;
    margin-top:30px;
    cursor:pointer;
    transition:background-color:1s ease;
    &:hover{
        background-color:#ff1e1e;
        color:white;
    }
`;

export const SearchInput = css.input`
    background-color:#44444459;
    color:white;
    border:1px solid white;
    transition:width 0.5s;
    height:30px
    font-size:14px;
    margin-left:${({ active }) => (active === true ? "10px" : "0")};
    padding:${({ active }) => (active === true ? "0 10px" : "0")};
    opacity:${({ active }) => (active === true ? "1" : "0")};
    width:${({ active }) => (active === true ? "200px" : "0px")};
`;
export const Profile = css.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
export const ButtonLink = css.button`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background-color: #f40612;
  }
`;
export const Text = css.a`
  color: #131313;
  font-size: 22px;
  padding-right: 1rem;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
export const FeatureCallOut = css.h2`
  color: #131313;
  font-size: 2rem;
  line-height: normal;
  font-weight: bolder;
  margin: 0;
  margin-bottom: 20px;
`;
