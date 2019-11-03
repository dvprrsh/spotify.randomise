import SpotifyWebApi from "spotify-web-api-node";
import { SAVE_API, ActionTypes_Spotify } from "./spotify.types";

import { spotifyAPI } from "../../../spotify-credentials/spotifyAPI";

const initialState = spotifyAPI;

export const spotifyApiReducer = (
  state: SpotifyWebApi = initialState,
  action: ActionTypes_Spotify,
) => {
  switch (action.type) {
    case SAVE_API:
      return { ...action.payload };
    default:
      return state;
  }
};
