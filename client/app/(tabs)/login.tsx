import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TextInput, SafeAreaView, Button, Pressable, Text } from 'react-native';
import React from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const TabThreeScreen = () => {
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [pass, onChangePass] = React.useState('');
    const [confPass, onChangeConfPass] = React.useState('');

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

        <ThemedView style={styles.loginTitle}>
            <ThemedText type="title">Sign Up</ThemedText>
        </ThemedView>

        <SafeAreaView style={{
            backgroundColor: 'black',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 30,
            marginBottom: 10
        }}>
            <View style={{
                marginVertical:8
            }}>

                <TextInput 
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder='First Name'
            keyboardType='default'
            placeholderTextColor='white'
            />
            
            <TextInput 
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder='Email'
            keyboardType='email-address'
            placeholderTextColor='white'
            />

            <TextInput 
            style={styles.input}
            onChangeText={onChangePass}
            value={pass}
            placeholder='Password'
            keyboardType='visible-password'
            placeholderTextColor='white'
            />

            <TextInput 
            style={styles.input}
            onChangeText={onChangeConfPass}
            value={confPass}
            placeholder='Confirm Password'
            keyboardType='visible-password'
            placeholderTextColor='white'
            />
            {/* BUTTON DOES NOTHING RIGHT NOW */}
            <Pressable style={styles.buttonStyle}>     
                <Text>Get Started</Text>
            </Pressable>

            </View>
            
        </SafeAreaView>

        <View style={{
            flexDirection:'row',
            alignItems: 'center',
            marginBottom: 10
        }}>

            <Text>Already have an account?</Text>
            <Pressable>
                <Text style={{
                    fontWeight: 'bold', 
                    color: '#FFD600', 
                    textDecorationLine:'underline',
                    marginLeft: 5

                }}>Login</Text></Pressable>

        </View>

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5
        }}>
            <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            flex: 1
        }}/>
        <Text style={{
            marginHorizontal: 10, 
            fontWeight: 'bold',
            fontSize: 20}}>OR</Text>

        <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            flex: 1
        }}/>

        </View>
        {/* BUTTON DOESNT DO ANYTHING */}
        <Pressable style={{
            backgroundColor: 'black',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 12
        }}>     
                <Image source={require('@/assets/images/yellow_google.png')} style={{
            height: 45,
            width: 45,
            margin: 2,
            marginHorizontal: 10  
        }}/>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Continue with Google</Text>
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
  loginTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 50,
    bottom: -10
  },
  input: {
    height: 50,
    marginHorizontal: 14,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: "#FFD600",
    color: 'white',
    height: 50,
    marginHorizontal: 14,
    marginVertical: 6,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 10
  }
});


export default TabThreeScreen;