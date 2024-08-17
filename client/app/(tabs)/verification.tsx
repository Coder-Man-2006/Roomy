import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TextInput, SafeAreaView, Button, Pressable, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const TabFourScreen = () => {
    const [pass, onChangePass] = React.useState('');


    return (
        <View style={{
        height: '100%',
        padding: 40,
        marginTop: 20,
        backgroundColor: 'white'
    }}>

        <Image source={require('@/assets/images/roomylogo.png')} style={{
            alignSelf: 'center',
            height: 100,
            width: 100,
            margin: 12 
        }}/>
        <View style={{marginVertical: 10}}>

            <ThemedText type='title' style={styles.verifyTitle}>Verification</ThemedText>
            <ThemedText type='title' style={styles.verifyTitle}>Email Sent</ThemedText>
        </View>


        <ThemedText type='default' style={{textAlign:'center', margin: 10, fontWeight: 'condensedBold'}}>Make sure you check your inbox for the verification email and enter the 6 digit code below:</ThemedText>


        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>

            <TextInput 
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            placeholder='_'
            keyboardType='visible-password'
            placeholderTextColor='black'
            />
            <TextInput 
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            placeholder='_'
            keyboardType='visible-password'
            placeholderTextColor='black'
            />
            <TextInput 
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            placeholder='_'
            keyboardType='visible-password'
            placeholderTextColor='black'
            />
            <TextInput 
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            placeholder='_'
            keyboardType='visible-password'
            placeholderTextColor='black'
            />
            <TextInput 
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            placeholder='_'
            keyboardType='visible-password'
            placeholderTextColor='black'
            />
            <TextInput 
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            placeholder='_'
            keyboardType='visible-password'
            placeholderTextColor='black'
            />
        </View>

       <View style={{
            flexDirection:'row',
            alignItems: 'center',
            gap: 6,
            marginTop: 10,
            justifyContent: 'center'
        }}>

            <Text style={{fontSize: 18}}>Didn't get the code?</Text>
            <Pressable>
                <Text style={{
                    fontWeight: 'bold', 
                    color: 'black', 
                    textDecorationLine:'underline',
                    marginLeft: 5,
                    fontSize: 18

                }}>Resend</Text></Pressable>

        </View>

        {/* BUTTON DOES NOTHING RIGHT NOW */}
        <Pressable style={styles.buttonStyle}>     
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Verify Email Address</Text>
        </Pressable>
        
    </View>


    );
};


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  verifyTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 5,
    height: 50,
    width: 300,
    bottom: -10,
    fontSize: 38,
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: 40,
    marginHorizontal: 7,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    color: 'black',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: "#FFD600",
    color: 'white',
    height: 50,
    marginHorizontal: 14,
    marginVertical: 30,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});


export default TabFourScreen;