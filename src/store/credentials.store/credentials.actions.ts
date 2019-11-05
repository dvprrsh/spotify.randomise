import { Dispatch } from "redux";
import { refreshTokens } from "../../apis/spotifyAPI";
import { SAVE_CREDENTIALS } from "./credentials.types";
import SpotifyWebApi from "spotify-web-api-node";

export const saveCredentials = (api: SpotifyWebApi) => {
  return async (dispatch: Dispatch) => {
    const result = await refreshTokens(api);
    return dispatch({ type: SAVE_CREDENTIALS, payload: result });
  };
};
