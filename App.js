import { StyleSheet, View } from "react-native";

import GameScreen from "./screens/GameScreen";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [loaded] = useFonts({
    PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf"),
  });
  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={() => handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el Número"} />
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },
});
