import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export const ThirdView = () => {
  return (
    <View style={styles.container} key="3">
      <ImageBackground
        source={{
          uri: `https://res.cloudinary.com/db0wbldom/image/upload/v1721637121/image_7_vlnori.png`,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>Embrace coffee essence</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
            mattis
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: "center",
    position: "absolute",
    zIndex: -2,
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(6, 6, 6,0.5)",
  },
  content: {
    width: "100%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: "#CE9760",
    textAlign: "center",
  },
});
