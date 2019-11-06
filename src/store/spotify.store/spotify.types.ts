import SpotifyWebApi from "spotify-web-api-node";
import Spotify from "spotify-web-api-js";

export const SAVE_API = "SAVE_API";

export type StateType_Spotify = SpotifyWebApi;

export type ActionTypes_Spotify = {
  type: typeof SAVE_API;
  payload: Spotify.SpotifyWebApiJs;
};
