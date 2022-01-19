import React, { useState, useEffect, useContext } from "react";
import Home from "./homePage/header";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { Store } from "../store/context";
import Login from "./LoginScreen";
import "../components/login/styles/style.css";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState({ state: false, msg: "" });
  const [mailError, setMailError] = useState({ state: false, msg: "" });
  const [passwordError, setPasswordError] = useState({ state: false, msg: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (localStorage.getItem("token")) window.location.href = "/";
  });

  const toogleSignUp = () => {
    window.location.href = "/login";
  };

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { name, email, password, confirmPassword };
    console.log(data)
    await axios
      .post("http://localhost:3000/api/signup", data)
      .then((resp) => {
        console.log(resp.data);
        window.location.href = "/login";
        setLoading(false);
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
        <div className="register__content">
          {loading && <div className="login__loading" />}
          <div className={`login__wrapper ${loading && "login__fade"}`}>
            <img
              className="login__logo"
              src="http://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google"
            />
            <p className="login__title">Registar-se</p>
            <p className="login__subtitle">Continue na loja</p>
            <form className="login__form">
              <TextField
                id="outlined-basic"
                label="Nome de Usuario"
                variant="outlined"
                className="login__input"
                error={usernameError.state}
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                helperText={mailError.msg}
              />
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
              <TextField
                id="outlined-basic"
                label="Confirmar Senha"
                variant="outlined"
                className="login__input"
                error={passwordError.state}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                  Fazer Login
                </Button>
                <Button
                  className="login__button"
                  color="primary"
                  variant="contained"
                  onClick={signUp}
                >
                  Registrar-se
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
