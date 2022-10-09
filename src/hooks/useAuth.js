import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:8080/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch(() => {
        navigate("/");
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    axios
      .post("http://localhost:8080/refresh", {
        refreshToken,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshAccessToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch(() => {
        navigate("/");
      });
  }, [refreshToken, expiresIn]);

  return accessToken;
}
