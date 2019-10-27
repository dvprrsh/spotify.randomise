import { AuthSession } from "expo";
import { spotifyAPI } from "../../spotify-credentials/spotifyAPI";

const scopes = ["playlist-modify-private", "playlist-modify-private"];

export const getApi = async () => {
  const res = await fetch("/api/");
  console.log(await res.blob());

  return res;
};

export const getAuthorisation = async () => {
  const authoriseURL = spotifyAPI.createAuthorizeURL(
    scopes,
    "testtesttesttest",
    true,
  );
  const result = await AuthSession.startAsync({ authUrl: authoriseURL }).catch(
    reason => {
      console.log(reason);
    },
  );
  return result.params.code;
};

export const getTokens = async () => {
  const authCode = await getAuthorisation();
  const token = await spotifyAPI.clientCredentialsGrant();

  console.log(token.body.access_token);
};
