import {
  SAVE_CREDENTIALS,
  ActionTypes_Credentials,
  Credentials,
} from "./credentials.types";

const initialState: Credentials = {
  access_token: null,
  expires_in: null,
  refresh_token: null,
  scope: null,
  token_type: null,
};

export const credentialsReducer = (
  state = initialState,
  action: ActionTypes_Credentials
) => {
  switch (action.type) {
    case SAVE_CREDENTIALS:
      return action.payload;
    default:
      return state;
  }
};
