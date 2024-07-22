import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

type Props = {
  children: React.ReactNode;
};
type User = {
  email: string;
};
type LoginInput = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | undefined;
  onLogin: (user: LoginInput) => void;
  onLogout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem("@user");
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    checkUser();
  }, []);

  // useEffect(() => {
  //   if (!user) {
  //     router.push("index");
  //   } else {
  //     router.push("home");
  //   }
  // }, [user]);

  const onLogin = (user: LoginInput) => {
    setUser({ email: user.email });
    AsyncStorage.setItem("@user", JSON.stringify(user));
    router.push("home");
  };
  const onLogout = async () => {
    await AsyncStorage.removeItem("@user");
    setUser(undefined);
    navigation.navigate("index");
  };

  return (
    <AuthContext.Provider value={{ onLogout, user, setUser, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return React.useContext(AuthContext);
};
