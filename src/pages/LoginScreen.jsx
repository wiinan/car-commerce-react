import React, { useState, useEffect, useContext } from "react";
import Home from "./homePage/header";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { Store } from "../store/context";
import { Link } from "react-router-dom";
import SignUp from "./registerScreen";
import "../components/login/styles/style.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [mailError, setMailError] = useState({ state: false, msg: "" });
  const [passwordError, setPasswordError] = useState({ state: false, msg: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (localStorage.getItem("token")) window.location.href = "/";
  });

  const toogleSignUp = () => {
    window.location.href = "/register";
  };

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { email, password };
    await axios
      .post("http://localhost:3000/api/login", data)
      .then((resp) => {
        console.log(resp.data.userLogged);
        localStorage.setItem("token", resp.data.userLogged);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    await verifyToken(localStorage.getItem("token"));
  };

  const verifyToken = async (token) => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      token: token,
    };
    axios
      .post("http://localhost:3000/api/verifyToken", {
        headers: {
          token: token,
        },
      })
      .then((resp) => {
        if (!resp.data.valid) {
          localStorage.removeItem("token", null);
        }

        dispatch({ type: "USER_LOGIN", payload: token });
        if (resp.data.valid) window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Home />
      <div className="login">
        <div className="login__content">
          {loading && <div className="login__loading" />}
          <div className={`login__wrapper ${loading && "login__fade"}`}>
            <img
              className="login__logo"
              src="http://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google"
            />
            <p className="login__title">Login</p>
            <p className="login__subtitle">Continue na loja</p>
            <form className="login__form">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="login__input"
                error={mailError.state}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={mailError.msg}
              />
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                className="login__input"
                error={passwordError.state}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText={passwordError.msg}
              />
              <div className="login__infoText">
                Nao esta usando seu PC? logar em guia privada?
                <a target="_blank" href="/learnmore">
                  Leia Mais
                </a>
              </div>
              <div className="login__buttons">
                <Button
                  className="login__button"
                  color="primary"
                  onClick={toogleSignUp}
                >
                  Criar Conta
                </Button>
                <Button
                  className="login__button"
                  color="primary"
                  variant="contained"
                  onClick={signin}
                >
                  Logar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
