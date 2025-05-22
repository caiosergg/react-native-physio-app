import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página de Detalhes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22 },
});
