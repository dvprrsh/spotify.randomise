import {
  SAVE_CREDENTIALS,
  ActionTypes_Credentials,
  Credentials,
} from "./credentials.types";

const initialState: Credentials | null = null;

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
