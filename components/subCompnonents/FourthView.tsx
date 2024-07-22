import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  onLogin: () => void;
  onRegister: () => void;
};

export const FourthView = ({ onLogin, onRegister }: Props) => {
  return (
    <View style={styles.container} key="4">
      <ImageBackground
        source={{
          uri: `https://res.cloudinary.com/db0wbldom/image/upload/v1721637739/image_10_b9ufn0.png`,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Unlock bean secrets</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
              mattis
            </Text>
          </View>
          <View style={styles.buttons}>
            <Pressable onPress={onRegister} style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Register</Text>
            </Pressable>
            <Pressable onPress={onLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Sign in</Text>
            </Pressable>
          </View>
        </View>
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
  contentWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(6, 6, 6,0.5)",
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 210,
    paddingHorizontal: 40,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    paddingBottom: 100,
  },
  loginButton: {
    width: 350,
    height: 53,
    backgroundColor: "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#CE9760",
    borderWidth: 3,
    color: "#CE9760",
  },
  registerButton: {
    width: 350,
    height: 53,
    backgroundColor: "#CE9760",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  registerButtonText: {
    color: "#543A20",
    fontSize: 20,
    fontWeight: "bold",
  },
  loginButtonText: {
    color: "#CE9760",
    fontSize: 20,
    fontWeight: "bold",
  },
});
