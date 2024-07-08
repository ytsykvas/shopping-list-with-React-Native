import {StyleSheet} from 'react-native';

function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
)
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#6495ED'
  },
  goalText: {
    color: 'white'
  }
});
