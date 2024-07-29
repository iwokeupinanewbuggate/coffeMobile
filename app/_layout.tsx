import { AuthProvider } from "@/contexts/AuthProvider";
import { DataProvider } from "@/contexts/DataProvider";
import ApolloProviders from "@/provider/ApolloProvider";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ApolloProviders>
      <DataProvider>
        <AuthProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </AuthProvider>{" "}
      </DataProvider>
    </ApolloProviders>
  );
}
