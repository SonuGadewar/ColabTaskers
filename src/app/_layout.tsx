// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function RootNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="Login" />
        </Stack.Protected>
      </Stack>
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
