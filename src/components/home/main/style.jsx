import styled from "styled-components/macro";
import { Routes as ReactRouterLink } from "react-router-dom";

export const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && "background:none;"};
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 5rem 56px;
  padding-left: 5rem;
  justify-content: space-between;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px
  display: flex;
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const SlonganStore = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  line-height: 2rem;
  color: black;
  margin-bottom: 3rem;
`;

export const Slongan = styled.h1`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${(props) => props.theme.contrastDefault};
  margin-bottom: 3rem;
`;

export const Logo = styled.img`
  position: relative;
  transform: scale(1.4) rotate(90deg);
  top: -20%;
`;

export const LogoCar = styled.img`
  position: absolute;
  display: flex;
`;

export const Picture = styled.button`
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.p`
  color: white;
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Dropdown = styled.div`
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

export const Search = styled.div`
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

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const PlayButton = styled.button`
    box-shadow:0 0.6vw 1vw -0.4vw rgba(0,0,0,0.35);
    background-color:#e6e6e6;
    color:#000;
    font-weight:bold;
    border-width:0;
    padding:10px 20px;
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

export const SearchInput = styled.input`
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

export const Profile = styled.div`
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

export const ButtonLink = styled(ReactRouterLink)`
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

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50% @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;