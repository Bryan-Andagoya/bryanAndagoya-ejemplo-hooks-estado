import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto"></StatusBar>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ejemplo del Hook useState</Text>
      </View>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View>
          <TouchableOpacity
            style={styles.signButton}
            onPress={() => setCount((prevCount) => prevCount - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button title="Reset" color="#61dbfb" onPress={() => setCount(0)} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.signButton}
            onPress={() => setCount((prevCount) => prevCount + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "darkgray",
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    paddingBottom: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  countContainer: {
    // backgroundColor: "orange",
    alignItems: "center",
    padding: 20,
  },
  countText: {
    // backgroundColor: "aqua",
    fontSize: 50,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
  signButton: {
    borderRadius: 50,
    backgroundColor: "#61dbfb",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
});
