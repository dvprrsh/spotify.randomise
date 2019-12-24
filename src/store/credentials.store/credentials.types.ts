export const SAVE_CREDENTIALS = "SAVE_CREDENTIALS";
export const LOGOUT = "LOGOUT";

export type StateType_Credentials = Credentials;

export type ActionTypes_Credentials =
  | {
      type: typeof SAVE_CREDENTIALS;
      payload: Credentials;
    }
  | {
      type: typeof LOGOUT;
      payload: null;
    };

export type Credentials = {
  access_token: null | string;
  expires_in: null | string;
  refresh_token: null | string;
  scope: null | string;
  token_type: null | string;
};
