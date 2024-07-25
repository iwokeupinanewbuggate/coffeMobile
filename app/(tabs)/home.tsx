import { Pressable, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import { ScrollView } from "react-native";
import { useGetCatgeoryQuery } from "@/generated";
import { Product } from "@/components/products";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserInfo } from "@/components/user";

export default function HomeScreen() {
  const pagerViewRef = useRef<PagerView>(null);
  const [user, SetUser] = useState<string | null>();
  const { onLogout } = useAuth();
  const { data, loading, error } = useGetCatgeoryQuery();

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <UserInfo SetUser={SetUser} user={user} />
        <ScrollView horizontal={true} style={{ width: 300, padding: 5 }}>
          <View style={styles.categoryList}>
            {data?.getCategory?.map((category, key) => (
              <Text key={key} style={{ color: "white", fontWeight: "bold" }}>
                {category.name}
              </Text>
            ))}
          </View>
        </ScrollView>
        <ScrollView style={{ height: 440, display: "flex" }}>
          <Product />
        </ScrollView>
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
    padding: 30,
    width: "100%",
    height: "100%",
    backgroundColor: "#543A20",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "orange",
  },
  categoryList: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
