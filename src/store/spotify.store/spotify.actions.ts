import { Dispatch } from "redux";
import { refreshTokens } from "../../apis/spotifyAPI";
import { SAVE_API } from "./spotify.types";
import SpotifyWebApi from "spotify-web-api-node";

export const saveTokens = (api: SpotifyWebApi) => {
  return async (dispatch: Dispatch) => {
    const spotifyApi = await refreshTokens(api);
    return dispatch({ type: SAVE_API, payload: spotifyApi });
  };
};
