import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from "../context/AppContext.js"; // Import the AppProvider

const RootLayout = () => {
  return (
    <AppProvider> {/* Wrap the entire app with AppProvider */}
      <SafeAreaProvider>
          <Stack
            screenOptions={{
              headerShown: false, // Hide the header for all screens
            }}
          >
            {/* Define your screens here */}
            <Stack.Screen name="index" />
            <Stack.Screen name="passwordrecovery" />
            <Stack.Screen name="signup" />
          </Stack>
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default RootLayout;
