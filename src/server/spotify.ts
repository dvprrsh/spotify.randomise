import { Router } from "express";
import { spotifyAPI } from "../../spotify-credentials/spotifyAPI";

const SpotifyRouter = Router();

SpotifyRouter.get("/api/", (req, res) => {
  res.status(200).json({ spotifyAPI });
});
