import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Pagamentos = () => {
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de pagamentos.</Text>
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
export default Pagamentos;