import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export const NastyComponent = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(state + 1);
  }, [state]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! {state}</Text>
    </View>
  );
};
