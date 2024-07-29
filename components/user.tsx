import { useAuth } from "@/contexts/AuthProvider";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export const UserInfo = () => {
  const { data } = useAuth();
  const profilePicUri = data?.login.profilePic || undefined;

  return (
    <Pressable onPress={() => router.push(`/user`)}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: profilePicUri }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <Text>{data?.login.name}</Text>
      </View>
    </Pressable>
  );
};
