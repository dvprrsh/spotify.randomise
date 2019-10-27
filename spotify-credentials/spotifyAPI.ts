import { AuthSession } from "expo";
import SpotifyWebAPI from "spotify-web-api-node";

export const spotifyAPI = new SpotifyWebAPI({
  clientId: "6fa6904c1eb24f008af05d5adf9b5781",
  clientSecret: "8b6822f33e73451d91fcbf62d4b04501",
  redirectUri: encodeURIComponent(AuthSession.getRedirectUrl()),
});
