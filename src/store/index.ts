import * as Redux from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import { AsyncStorage } from "react-native";
import { credentialsReducer } from "./credentials.store/credentials.reducer";

import { Credentials } from "./credentials.store/credentials.types";
export interface IState {
  credentials: Credentials;
}

const persistConfig: PersistConfig<IState> = {
  key: "key",
  storage: AsyncStorage,
  timeout: 10000,
};

const rootReducer = combineReducers({
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
