import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import Splach from "./spalsh";

const Rootlayout = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 5000);

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
      </Stack>
    </>
  );
};
export default Rootlayout;
