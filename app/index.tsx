import { Image, StyleSheet, View } from "react-native";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/favicon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Header title={"Olá, seja bem vindo!"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009688",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: "center",
  },
});
