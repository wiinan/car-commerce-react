import React, { useState, useEffect, useContext } from "react";
import Home from "../homePage/header";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { Store } from "../../store/context";
import "../../components/login/styles/style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [mailError, setMailError] = useState({ state: false, msg: "" });
  const [passwordError, setPasswordError] = useState({ state: false, msg: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  });

  const toogleSignUp = () => {
    navigate("/register");
  };

  const signin = async e => {
    e.preventDefault();
    setLoading(true);
    setMailError({ state: false, msg: "" });
    setPasswordError({ state: false, msg: "" });
    const data = { email, password };
    await axios
      .post("http://localhost:3000/api/login", data)
      .then(resp => {
        console.log(resp.data)
        localStorage.setItem("token", resp.data.userLogged);
        setLoading(false);
      })
      .catch(err => {
        if (err.response.data.Error.includes("Usuario")) {
          setMailError({ state: true, msg: err.response.data.Error });
          setPassword("")
          return setLoading(false);
        }

        if (err.response.data.error.includes("email")) {
          setMailError({ state: true, msg: err.response.data.error });
        }

        if (err.response.data.error.includes("senha")) {
          setPasswordError({ state: true, msg: err.response.data.error });
          setPassword("")
        }

        return setLoading(false);
      });
    await verifyToken(localStorage.getItem("token"));
  };

  const verifyToken = async token => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      token
    };

    axios.post("http://localhost:3000/api/verifyToken", {
        headers: { token }
      })
      .then(resp => {
        if (!resp.data.valid) localStorage.removeItem("token", null);

        dispatch({ type: "USER_LOGIN", payload: token });

        if (resp.data.valid) navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
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
