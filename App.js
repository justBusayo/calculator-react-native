import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [input, setInput] = useState();
  const [result, setResult] = useState("3");

  const onButtonPressed = (value) => {
    if (value == "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult(error);
      }
    } else if (value === "C") {
      setInput("");
      setResult();
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.upperContainer}>
        <View style={styles.calculator}>
          <Text style={styles.calculatorText}>Calculator</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={input}
            onChangeText={setInput}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result || 0}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {[
          "C",
          "()",
          "%",
          "/",
          "1",
          "2",
          "3",
          "*",
          "4",
          "5",
          "6",
          "+",
          "7",
          "8",
          "9",
          "-",
          ".",
          "0",
          "000",
          "=",
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onButtonPressed(item)}
          >
            <Text
              style={item === "=" ? styles.summationBtn : item ===  "()" ||item ===  "%" ||item ===  "/" ||item ===  "*" || item === "+" || item === "-" ? styles.characterBtn : item === "C" ? styles.cancelBtn : styles.buttonText}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#123447", //#23297a"
  },
  upperContainer: {
    height: "30%",
    borderBottomWidth: 4,
    borderBottomColor: "#23297a",
  },
  calculator: {
    flex: 2,
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  calculatorText: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  resultContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultText: {
    fontSize: 40,
    marginRight: 20,
    color: "#fff",
    fontWeight: 900,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  inputText: {
    fontSize: 15,
    marginRight: 20,
    color: "#ccc",
  },
  buttonContainer: {
    flex: 7,
    height: "60%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    fontSize: 24,
    width: "25%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  summationBtn: {
    backgroundColor: "#23297a",
    fontSize: 24,
    color: "#fff",
    padding: 30,
  },
  characterBtn: {
    fontSize: 24,
    color: "#a0e6ff",
  },
  cancelBtn: {
    fontSize: 24,
    color: "#fd5800",
  }
});
