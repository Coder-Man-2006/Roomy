import {
    StyleSheet,
    View,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  
  const Birthday = () => {
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
        <Image
            source={require("@/assets/images/roomy_logo.png")}
            style={styles.roomylogo}
          ></Image>
          <Image
            source={require("@/assets/images/step-1.png")}
            style={styles.step1}
          ></Image>
        </View>

          <Text style={styles.headertext}>
            What's your {'\n'} Birthday?
          </Text>

          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.dateText}>MM / DD / YYYY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Birthday;
  
  const styles = StyleSheet.create({
    headertext: {
      fontSize: 40,
      margin: 20,
      marginLeft: 50,
      marginBottom: 20,
      fontFamily: "RedHatDisplayBold",
    },
    bodytext: {
      fontSize: 18,
      marginHorizontal: 20,
      fontFamily: "RedHatDisplayRegular",
    },
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        marginTop: 20, 
      },
    roomylogo: {
      width: 125,
      height: 125,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 50,
      
    },
    step1:{
        alignItems: 'center',
      justifyContent: 'center',
        width: 125,
        height: 125,
        marginLeft: 20,
    },
    button: {
      backgroundColor: "#FFD600",
      borderWidth: 3,
      borderColor: "black",
      marginTop: 20,
      width: 300,
      height: 50,
      alignSelf: "center",
      alignContent: "center",
    },
    buttonText: {
      fontSize: 20,
      textAlign: "center",
      marginTop: 10,
      fontFamily: "RedHatDisplayBold",
    },
    dateButton:{
        borderWidth: 1,
        borderColor: "#898989",
        marginTop: 20,
        width: 300,
        height: 50,
        alignSelf: "center",
        alignContent: "center",
    },
    dateText: {
        fontSize: 20,
        color: "#898989",
        textAlign: "center",
        marginTop: 10,
        fontFamily: "RedHatDisplayBold",
      },
  });