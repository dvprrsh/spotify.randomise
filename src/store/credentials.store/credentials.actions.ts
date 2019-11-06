import { Dispatch } from "redux";
import { refreshTokens } from "../../apis/spotifyAPI";
import { SAVE_CREDENTIALS } from "./credentials.types";
import Spotify from "spotify-web-api-js";

export const saveCredentials = (
  api: Spotify.SpotifyWebApiJs,
  refreshToken: string
) => {
  return async (dispatch: Dispatch) => {
    const result = await refreshTokens(api, refreshToken);
    return dispatch({ type: SAVE_CREDENTIALS, payload: result });
  };
};

export const logout = () => ({ type: SAVE_CREDENTIALS, payload: null });
