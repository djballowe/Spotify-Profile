const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;

  console.log("Token Refreshed");

  const spotifyApi = new SpotifyWebApi({
    clientId: "f63cf053c027456498b653ac3c39465a",
    clientSecret: "057cd493916c48a491dfee97c0df4ed3",
    redirectUri: "http://localhost:3000",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    clientId: "f63cf053c027456498b653ac3c39465a",
    clientSecret: "057cd493916c48a491dfee97c0df4ed3",
    redirectUri: "http://localhost:3000",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      console.log(data.body);
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
      console.log(err);
    });
});

app.listen(8080);
