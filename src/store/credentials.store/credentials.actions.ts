import { Dispatch } from "redux";

import { refreshTokens, getTokens } from "../../apis/spotifyAPI";
import { SAVE_CREDENTIALS } from "./credentials.types";

export const saveCredentials = (refreshToken: string | null) => {
  return async (dispatch: Dispatch) => {
    const result = refreshToken
      ? await refreshTokens(refreshToken)
      : await getTokens();
    return dispatch({ type: SAVE_CREDENTIALS, payload: result });
  };
};

export const logout = () => ({ type: SAVE_CREDENTIALS, payload: null });
