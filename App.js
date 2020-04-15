import React from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Linking, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import { navigationRef } from './RootNavigation';


const Stack = createStackNavigator();

const App = (params) => {
  return (
    <NavigationContainer ref ={navigationRef}
>
      <Stack.Navigator>
        <Stack.Screen name="instagram" component={AlbumScreen}
          options={{
            headerLeft: () =>
              <Image style={styles.hl} source={require('./src/img/camera.png')} />,
            headerTitleImage: () =>
              <Image style={styles.ht} source={require('./src/img/title.png')} />,

            headerRight: () =>
              <TouchableOpacity
              onPress={() => navigationRef.current.navigate("justin_zebra",params)}>
                <Image style={styles.hr} source={require('./src/img/share.png')} />
              </TouchableOpacity>,


            headerTintColor: '#000',
            headerStyle: { backgroundColor: '#fff' },

          }}



        />
        <Stack.Screen name="justin_zebra" component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  hl:
  {
    width: 25,
    height: 23,
    left: 15
  },
  ht: {
    width: 110,
    height: 35,
    left: 5,
    top: 10

  },
  hr:
  {
    flexDirection: "row",
    width: 25,
    height: 23,
    right: 15
  },
});

export default App;