import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This the Home screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Messages')}>
        <Text>Go to Messages</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.toggleDrawer()}>
        <Text>Toogle Side Nav</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#09f',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
});
export default Home;