import { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

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
        <TextInput
          style={styles.textInput}
          placeholder="Enter item"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel}/>
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
    padding: 30,
    marginBottom: 24,
    borderBottomWidth: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    marginRight: 8,
    padding: 8,
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
