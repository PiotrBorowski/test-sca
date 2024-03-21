import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const NastyComponent = ({ initialValue }) => {
  const [state, setState] = useState(0);

  const someFunction = () => {
    setState((prev) => prev + 1);
  };

  useEffect(() => {
    setState(state + 1);
  }, [state]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! {state}</Text>
      <Button title="Press me" onPress={someFunction} />
    </View>
  );
};
