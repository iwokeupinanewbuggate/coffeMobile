import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { LoginMutation, useLoginMutation } from "@/generated";

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
  data: LoginMutation | null | undefined;
};
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>();
  const navigation = useNavigation<any>();
  const [loginMutation, { data, loading, error }] = useLoginMutation();
  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem("@user");
      if (user) {
        setUser(JSON.parse(user));
        router.push("home");
      }
    };
    checkUser();
  }, []);

  const onLogin = async (user: LoginInput) => {
    setUser({ email: user.email });
    try {
      const res = await loginMutation({
        variables: {
          input: {
            email: user.email,
            password: user.password,
          },
        },
      });

      if (res.data?.login) {
        console.log(res);
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        router.push("home");
      } else {
        alert("Email or Password was wrong");
      }
    } catch (err) {
      console.log(err);
      alert("Email or Password was wrong");
    }
  };
  const onLogout = async () => {
    await AsyncStorage.removeItem("@user");
    setUser(undefined);
    navigation.navigate("index");
  };

  return (
    <AuthContext.Provider value={{ onLogout, user, setUser, onLogin, data }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return React.useContext(AuthContext);
};
