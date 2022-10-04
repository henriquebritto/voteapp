import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { SafeAreaView } from "react-native-safe-area-context";

export function Routes() {
  return (
    <SafeAreaView style={{
        flex: 1,
    }}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
