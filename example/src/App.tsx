import { Text, View, StyleSheet } from 'react-native';
import { getManagedConfig } from 'react-native-mdm-config';

const gc_result = getManagedConfig();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>
        getManagedConfig: {JSON.stringify(gc_result, null, 4)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
