import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }} />
      <Stack.Screen name="signup" options={{ title: "Crear Usuario" }} />
      <Stack.Screen name="events" options={{ title: "Eventos" }} />
      <Stack.Screen name="history" options={{ title: "Historial" }} />
    </Stack>
  );
}
