import { useEffect, useState } from "react";
import { View, Text } from "react-native";
// import splach from "./Splash";
import { Stack } from "expo-router";
import Splach from "./spalsh";
import inbox from "./inbox";

const Rootlayout = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (!isReady) {
    return <Splach />;
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          options={{ title: "Signin", headerShown: false }}
        />
        <Stack.Screen
          name="spacialities"
          options={{ title: "Spacialist", headerShown: false }}
        />
      </Stack>
    </>
  );
};
export default Rootlayout;
