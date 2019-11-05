import { SAVE_API } from "./spotify.types";
import SpotifyWebApi from "spotify-web-api-node";

export const saveApi = (api: SpotifyWebApi) => {
  return { type: SAVE_API, payload: api };
};
