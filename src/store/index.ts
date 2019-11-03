import * as Redux from "redux";
import { combineReducers } from "redux";
import { spotifyApiReducer } from "./spotify.store/spotify.reducer";
import thunk from "redux-thunk";
import { Credentials } from "./spotify.store/spotify.types";
import SpotifyWebApi from "spotify-web-api-node";

export interface IState {
  spotifyApi: { api: SpotifyWebApi; credentials: Credentials };
}

const rootReducer = combineReducers<IState>({
  spotifyApi: spotifyApiReducer,
});

export const store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(thunk),
);
