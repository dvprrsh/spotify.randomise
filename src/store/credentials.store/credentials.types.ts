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

export interface Credentials {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
