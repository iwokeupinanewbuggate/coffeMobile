import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Text, View } from "react-native";

export const UserInfo = ({
  SetUser,
  user,
}: {
  SetUser: Dispatch<SetStateAction<string | null | undefined>>;
  user: string | null | undefined;
}) => {
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("@user");
      SetUser(user);
    };
    getUser();
  }, []);
  return (
    <View>
      <Text>{user}</Text>
    </View>
  );
};
