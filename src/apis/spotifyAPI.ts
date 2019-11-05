import { AuthSession } from "expo";
import SpotifyWebApi from "spotify-web-api-node";
import { Credentials } from "../store/credentials.store/credentials.types";
import { encode } from "base-64";

const scopes = ["playlist-modify-private", "playlist-modify-private"];

export const getAuthorisation = async (api: SpotifyWebApi) => {
  console.log("authorise");

  const authoriseURL = api.createAuthorizeURL(scopes, "testtesttesttest", true);
  const result = await AuthSession.startAsync({ authUrl: authoriseURL }).catch(
    reason => {
      console.log("REASON", reason);
    }
  );

  if (result && result.type === "success") {
    return result.params.code;
  } else {
    return null;
  }
};

export const getTokens = async (api: SpotifyWebApi) => {
  try {
    const authorizationCode = await getAuthorisation(api); //we wrote this function above
    const b64Credentials = encode(
      `${api.getClientId()}:${api.getClientSecret()}`
    );
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${b64Credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${api.getRedirectURI()}`,
    });
    const responseJson = await response.json();
    api.setCredentials(responseJson);
    return responseJson;
  } catch (err) {
    console.error(err);
  }
};

export const refreshTokens = async (
  api: SpotifyWebApi
): Promise<Credentials> => {
  const b64Credentials = encode(
    `${api.getClientId()}:${api.getClientSecret()}`
  );
  const refreshToken = api.getRefreshToken();

  return new Promise(async resolve => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${b64Credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    });
    const responseJson = await response.json();
    if (responseJson.error) {
      const initialTokens = await getTokens(api);
      if (initialTokens) resolve(initialTokens);
    } else {
      api.setCredentials(responseJson._credentials);
      resolve(responseJson._credentials);
    }
  });
};
