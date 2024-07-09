import { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/shopping_list.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter item"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} color={'#006400'}/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={'#CD5C5C'}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FFFFF0'
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 60,
    margin: 100
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    width: '100%',
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    margin: 16,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
});
