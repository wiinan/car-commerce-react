import { useContext } from "react";
import axios from "axios";

const { dispatch } = useContext;

const api = {
  baseURL: "http://localhost:3000/",
};

const verifyToken = async (token) => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    token,
  };

  axios
    .post("http://localhost:3000/api/verifyToken", {
      headers: { token },
    })
    .then((resp) => {
      if (!resp.data.valid) localStorage.removeItem("token", null);

      dispatch({ type: "USER_LOGIN", payload: token });

      if (resp.data.valid) return true;

      return 12
    })
    .catch((err) => {
      console.log(err.response);
      return false;
    });
};

export { api, verifyToken };
