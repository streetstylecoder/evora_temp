// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity,ImageBackground ,Image} from 'react-native'
import { Checkbox } from 'react-native-paper'
const image = { uri: "https://reactjs.org/logo-og.png" };
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function text(){
    return (
        <View style={styles.mainContainer} >
        <Image
          source={{ uri: "https://i.postimg.cc/PJYVcmfc/evora.png" }}
          style={{ width: 140, height: 140 ,paddingTop:0}}
        />
              <Text style={styles.mainHeader} >Please login to continue</Text>
              <Text style={styles.description} > </Text>
        
            <View style={styles.inputContainer}>
              <Text style={styles.labels}> Username </Text>
        <TextInput 
              style={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              value={userName}
              onChangeText={(actualData)=>setUserName(actualData)}
               />
            </View>
        <View style={styles.inputContainer}>
              <Text style={styles.labels}>Password</Text>
              <TextInput 
              style={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
               />
        </View>
            <View style={styles.wrapper}>
              <Checkbox.Android 
              
              //color='#4630EB'
              status={agree ? 'checked' : 'unchecked'}
              onPress={ ()=> {
                setAgree(!agree);
              }}
              />
        <Text style={styles.wrapperText} > I have read and agreed with the TC </Text>
            </View>
        
            <TouchableOpacity style={[
              styles.buttonStyle,
              {
                backgroundColor : agree ? '#4630EB' : 'grey' ,
              },
            ]}
        disabled={!agree} onPress={submit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        
        
            </View>
          )
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home " component={text}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
const styles = StyleSheet.create({
    mainContainer: {
      height: '100%',
      paddingHorizontal: 30,
      paddingTop: 0,
      backgroundColor: '#000'
    },
    mainHeader: {
      fontSize: 25,
      color: '#fff',
      fontWeight: '500',
      paddingTop: 20,
      paddingBottom: 2,
      textTransform: 'capitalize',
  
    },
  description: {
      fontSize: 20,
      color: '#fff',
      paddingBottom: 20,
      lineHeight: 25,
      fontFamily: 'regular',
    },
    inputContainer: {
      marginTop: 2,
    },
  labels: {
      fontSize: 18,
      color: '#fff',
      marginTop: 0.5,
      marginBottom: 2,
      lineHeight: 25,
      fontFamily: 'regular',
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 7,
      borderRadius: 1,
      //
      fontFamily: 'regular',
      fontSize: 18,
      color:'#fff'
    },
  wrapper: {
      // paddingHorizontal: 10,
      // paddingVertical: 15,
      // paddingBottom: 30
      flexDirection:"row",
      // justifyContent:'center',
      alignItems:"center",
      marginTop: 15,
      marginBottom: 360
      // alignContent:"center"
  
    },
    wrapperText: {
      color:"#fff",
      // paddingLeft: 30
      marginTop: 0,
  
    },
  buttonStyle: {
      borderRadius: 40,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
  
  
  
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      justifyContent: 'center',
      alignContent: 'center',
      fontWeight: '600'
    },
    image: {
      flex: 1,
      justifyContent: "center",
      resizeMode: 'cover'
  
    }
    
  });
export default App;