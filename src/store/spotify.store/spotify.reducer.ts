import {
  SAVE_CREDENTIALS,
  ActionTypes_Spotify,
  SAVE_API,
} from "./spotify.types";
import { spotifyAPI } from "../../../spotify-credentials/spotifyAPI";

const initialState = { api: spotifyAPI, credentials: {} };

export const spotifyApiReducer = (
  state = initialState,
  action: ActionTypes_Spotify,
) => {
  switch (action.type) {
    case SAVE_API:
      return { ...state, api: action.payload };
    case SAVE_CREDENTIALS:
      return { ...state, credentials: action.payload };
    default:
      return state;
  }
};
