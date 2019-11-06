import { SAVE_API } from "./spotify.types";
import Spotify from "spotify-web-api-js";

export const saveApi = (api: Spotify.SpotifyWebApiJs) => {
  return { type: SAVE_API, payload: api };
};
