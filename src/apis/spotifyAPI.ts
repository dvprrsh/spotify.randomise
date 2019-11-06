import { AuthSession } from "expo";
import Spotify from "spotify-web-api-js";
import { Credentials } from "../store/credentials.store/credentials.types";
import { encode } from "base-64";
import { authCredentials } from "../../spotify-credentials/spotifyAPI";

const scopes = "playlist-modify-private playlist-modify-private";

export const spotifyAPI = new Spotify();

export const getAuthorisation = async () => {
  const result = await AuthSession.startAsync({
    authUrl:
      "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      authCredentials.clientId +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(authCredentials.redirectUri),
  }).catch(reason => {
    console.log("REASON", reason);
  });

  if (result && result.type === "success") {
    return result.params.code;
  } else {
    return null;
  }
};

export const getTokens = async (api: Spotify.SpotifyWebApiJs) => {
  try {
    const authorizationCode = await getAuthorisation(); //we wrote this function above
    const b64Credentials = encode(
      `${authCredentials.clientId}:${authCredentials.clientSecret}`
    );
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${b64Credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${authCredentials.redirectUri}`,
    });
    const responseJson = await response.json();
    api.setAccessToken(responseJson._credentials.access_token);
    return responseJson;
  } catch (err) {
    console.error(err);
  }
};

export const refreshTokens = async (
  api: Spotify.SpotifyWebApiJs,
  refreshToken: string
): Promise<Credentials> => {
  const b64Credentials = encode(
    `${authCredentials.clientId}:${authCredentials.clientSecret}`
  );
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
      api.setAccessToken(responseJson._credentials.access_token);
      resolve(responseJson._credentials);
    }
  });
};
