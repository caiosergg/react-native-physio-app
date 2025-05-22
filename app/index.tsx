import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Header title={"Olá"} />
      <Image
        source={require("../assets/images/favicon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={() => router.push("/details")}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009688",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginVertical: 240,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
