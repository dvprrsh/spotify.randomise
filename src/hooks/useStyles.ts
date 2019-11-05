import { StyleSheet } from "react-native";

export const useStyles = () =>
  StyleSheet.create({
    spotifyLogin: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#1db954",
      padding: 10,
      borderRadius: 50,
      width: "50%",
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
