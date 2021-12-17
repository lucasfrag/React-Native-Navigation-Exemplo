import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>This is a Profile Screen</Text>
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
export default Profile;