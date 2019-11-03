import * as Redux from "redux";
import { combineReducers } from "redux";
import { spotifyApiReducer } from "./spotify.store/spotify.reducer";
import thunk from "redux-thunk";
import SpotifyWebApi from "spotify-web-api-node";

export interface IState {
  spotifyApi: SpotifyWebApi;
}

const rootReducer = combineReducers<IState>({
  spotifyApi: spotifyApiReducer,
});

export const store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(thunk),
);
