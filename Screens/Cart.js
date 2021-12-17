import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>This is a Cart Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Cart;