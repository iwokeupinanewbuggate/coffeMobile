import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text>Order</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
