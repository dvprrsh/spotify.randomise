import SpotifyWebApi from "spotify-web-api-node";

export const SAVE_API = "SAVE_API";
export const SAVE_CREDENTIALS = "SAVE_CREDENTIALS";

export type StateType_Spotify = SpotifyWebApi;

export type ActionTypes_Spotify =
  | {
      type: typeof SAVE_API;
      payload: SpotifyWebApi;
    }
  | {
      type: typeof SAVE_CREDENTIALS;
      payload: Credentials;
    };

export type Credentials = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
};
