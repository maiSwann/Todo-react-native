import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native'

const SideMenuScreen = (navigation) => {

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default SideMenuScreen;