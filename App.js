import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    // <View style={styles.appContainer}>
    //   <View style={styles.inputContainer}>
    //     <TextInput style={styles.textInput} placeholder='Type here'/>
    //     <Button title='submit'/>
    //   </View>
    //   <View>
    //     <Text>List of goals</Text>
    //   </View>
    // </View>

    <View style={{ padding: 50, flexDirection: 'row', width: '100%', height: '50%', justifyContent: 'space-around', alignItems: 'stretch' }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>

      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>

      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // appContainer: {
  //   padding: 80
  // },
  // inputContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },
  // textInput: {
  //   borderWidth: 1,
  //   boederColor: 'black',
  //   width: '80%',
  //   marginRight: 8,
  //   padding: 8
  // }

});
