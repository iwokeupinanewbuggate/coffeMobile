import { useAuth } from "@/contexts/AuthProvider";
import { useLoginMutation } from "@/generated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function User() {
  const { data } = useAuth();
  const profilePicUri = data?.login.profilePic || undefined;

  return (
    <View style={styles.bigContainer}>
      <Pressable onPress={() => router.push("/home")}>
        <Text style={styles.textStyle}>Go Back</Text>
      </Pressable>
      <View style={styles.secondContainer}>
        <Image source={{ uri: profilePicUri }} style={styles.imageStyle} />
        <View style={styles.infoContainer}>
          <View style={styles.secondInfo}>
            <Text style={styles.textStyle}>Name :</Text>
            <Text style={styles.textStyle}>Email :</Text>
            <Text style={styles.textStyle}>Address :</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>{data?.login.name}</Text>
            <Text style={styles.textStyle}>{data?.login.email}</Text>
            {!data?.login.address && (
              <Text style={styles.textStyle}>Address is not given</Text>
            )}
            {data?.login.address && (
              <Text style={styles.textStyle}>{data?.login.address}</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  secondContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  bigContainer: {
    padding: 50,
    backgroundColor: "#543A20",
    width: "100%",
    height: "100%",
  },
  secondInfo: {
    display: "flex",
    alignItems: "flex-end",
  },
});
