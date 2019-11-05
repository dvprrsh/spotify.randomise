import * as Redux from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import SpotifyWebApi from "spotify-web-api-node";
import {
  persistStore,
  persistReducer,
  PersistConfig,
  Storage,
} from "redux-persist";
import { spotifyApiReducer } from "./spotify.store/spotify.reducer";
import { Credentials } from "./spotify.store/spotify.types";
import { AsyncStorage } from "react-native";
export interface IState {
  spotifyApi: { api: SpotifyWebApi; credentials: Credentials };
}

const persistConfig: PersistConfig<Storage> = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers<IState>({
  spotifyApi: spotifyApiReducer,
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
