import * as React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

const SideMenuScreen = ({navigation}) => {

  const navigateToHomeScreen = () => {
    navigation.navigate("HomeScreen")
  }

  const navigateToLoginScreen = () => {
    navigation.navigate('LoginScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.crossButton}
          onPress={() => navigateToHomeScreen()}
        >
          <Image style={styles.crossImg} source={require('./../assets/cross.png')}></Image>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigateToLoginScreen()}
      >
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    header: {
      height: 98,
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    crossButton:{
      marginRight: 30,
      marginBottom: 20
    },
    crossImg: {
      height: 20,
      width: 20
    },
    logoutButton: {
      backgroundColor: "#FFBF86",
      position: "absolute",
      width: 227,
      height: 55,
      alignItems: "center",
      justifyContent: "center",
      bottom: 60,
      alignSelf: "center",
      borderRadius: 15
    },
    logoutButtonText: {
      color: "white",
      fontSize: 20
    }
});

export default SideMenuScreen;