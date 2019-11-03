import { AuthSession } from "expo";
import SpotifyWebApi from "spotify-web-api-node";

const scopes = ["playlist-modify-private", "playlist-modify-private"];

export const getAuthorisation = async (api: SpotifyWebApi) => {
  const authoriseURL = api.createAuthorizeURL(scopes, "testtesttesttest", true);
  const result = await AuthSession.startAsync({ authUrl: authoriseURL }).catch(
    reason => {
      console.log("REASON", reason);
    },
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
    const b64Credentials = btoa(
      `${api.getClientId()}:${api.getClientSecret()}`,
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

    api.setAccessToken(responseJson.access_token);
    api.setRefreshToken(responseJson.refresh_token);
    return api;
  } catch (err) {
    console.error(err);
  }
};

export const refreshTokens = async (
  api: SpotifyWebApi,
): Promise<SpotifyWebApi> => {
  try {
    const b64Credentials = btoa(
      `${api.getClientId()}:${api.getClientSecret()}`,
    );
    const refreshToken = api.getRefreshToken();
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
      const spotifyApi = await getTokens(api);
      if (spotifyApi) return spotifyApi;
    } else {
      api.setAccessToken(responseJson.newAccessToken);
      api.setRefreshToken(responseJson.newRefreshToken);
      return api;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getAccessToken = (api:SpotifyWebApi) => {
  return api.getAccessToken()
}
