import SpotifyWebApi from "spotify-web-api-node";

export const SAVE_API = "SAVE_API";

export type StateType_Spotify = SpotifyWebApi;

export type ActionTypes_Spotify = ActionType_SaveAPI;

export type ActionType_SaveAPI = {
  type: typeof SAVE_API;
  payload: SpotifyWebApi;
};
