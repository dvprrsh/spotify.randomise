import * as Redux from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { spotifyApiReducer } from "./spotify.store/spotify.reducer";
import { AsyncStorage } from "react-native";
import { credentialsReducer } from "./credentials.store/credentials.reducer";
import SpotifyWebApi from "spotify-web-api-node";
import { Credentials } from "./credentials.store/credentials.types";
export interface IState {
  spotifyApi: SpotifyWebApi;
  credentials: Credentials;
}

const persistConfig = {
  key: "key",
  storage: AsyncStorage,
  blacklist: ["spotifyApi"],
};

const rootReducer = combineReducers({
  spotifyApi: spotifyApiReducer,
  credentials: credentialsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = () => {
  const reduxStore = createStore(
    persistedReducer,
    Redux.applyMiddleware(thunk)
  );
  const persistor = persistStore(reduxStore);
  return { reduxStore, persistor };
};
