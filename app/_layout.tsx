import { AuthProvider } from "@/contexts/AuthProvider";
import ApolloProviders from "@/provider/ApolloProvider";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ApolloProviders>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthProvider>
    </ApolloProviders>
  );
}
