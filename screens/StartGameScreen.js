import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";
import { useState } from "react";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleInputNumber = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g), "");
    console.log(enteredValue);
  };

  const cleanInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handleConfirmInput = () => {
    const choseNumber = parseInt(enteredValue);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Tu selección</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="EMPEZAR JUEGO"
          onPress={props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.inputContainer}>Elije un numero</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleInputNumber}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <View stlye={styles.btnStyles}>
              <Button
                onPress={cleanInput}
                color={colors.accent}
                title="Limpiar"
              />
            </View>

            <View stlye={styles.btnStyles}>
              <Button
                onPress={handleConfirmInput}
                color={colors.primary}
                title="Confirmar"
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "poppins-black",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    alignContent: "space-between",
    backgroundColor: "black",
    height: 50,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
  },
  btnStyles: {
    width: 100,
    marginRight: "10%",
    marginTop: 10,
    backgroundColor: "red",
  },
  summaryContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartGameScreen;
