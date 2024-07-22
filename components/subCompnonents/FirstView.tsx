import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BigLogo } from "../svg/Logo";
import { CoffeeText } from "../svg/CoffeeText";

type Props = {
  onStart: () => void;
};

export const FirstView = ({ onStart }: Props) => {
  return (
    <View style={styles.container} key="1">
      <ImageBackground
        source={{
          uri: `https://res.cloudinary.com/db0wbldom/image/upload/v1721376629/unsplash_SCbq6uKCyMY_o2ubou.png`,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <LinearGradient
        colors={["rgba(84, 58, 32, 0.58)", "rgba(0, 0, 0, 1)"]}
        style={styles.linearGradient}
        start={{ x: 0.5, y: 0 }} // Gradient starts at the center top
        end={{ x: 0.5, y: 1 }} // and ends at the center bottom
      />
      <View style={styles.content}>
        <View style={styles.logo}>
          <BigLogo />
          <CoffeeText />
        </View>
        <Pressable onPress={onStart} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  image: {
    justifyContent: "center",
    position: "absolute",
    zIndex: -2,
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 233,
  },
  button: {
    width: 242,
    height: 53,
    backgroundColor: "#CE9760",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 280,
    marginBottom: 84,
  },
  buttonText: {
    color: "#543A20",
    fontSize: 20,
    fontWeight: "bold",
  },
});
