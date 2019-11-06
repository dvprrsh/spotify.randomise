import { ActionTypes_Spotify, SAVE_API } from "./spotify.types";
import { spotifyAPI } from "../../apis/spotifyAPI";

const initialState = spotifyAPI;

export const spotifyApiReducer = (
  state = initialState,
  action: ActionTypes_Spotify
) => {
  switch (action.type) {
    case SAVE_API:
      return action.payload;
    default:
      return state;
  }
};
