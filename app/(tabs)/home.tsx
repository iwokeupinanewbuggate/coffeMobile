import { Pressable, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { useRef } from "react";
import { useAuth } from "@/contexts/AuthProvider";

export default function HomeScreen() {
  const pagerViewRef = useRef<PagerView>(null);
  const { onLogout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text>Home</Text>
        <Pressable style={styles.logoutButton} onPress={onLogout}>
          <Text>Log Out</Text>
        </Pressable>
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
    backgroundColor: "#543A20",
  },
  logoutButton: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "orange",
  },
});
