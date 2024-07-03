import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>
        Hello world!
      </Text>
      <Text style={styles.dummyText}>
        ТУТ НЕ ІСНУЄ CSS
      </Text>
      <Button title="ЯК ТАК?" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 8,
    borderWidth: 2,
    borderBlockColor: 'black'
  }
});
