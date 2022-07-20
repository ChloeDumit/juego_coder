import { Image, Text, View } from "react-native";

import Card from "../components/Card";

const GameOverScreen = (props) => {
  return (
    <View>
      <Image style={StyleSheet.image} />
      <Card style={styles.resultContainer}>
        <Text>Intentos: {props.round}</Text>
        <Text>El numero era: {props.choice}</Text>
      </Card>
      <Button onPress={props.onRestart} />
    </View>
  );
};
