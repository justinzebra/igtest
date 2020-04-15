import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Image
          style={styles.thumbnailStyle0}

          source={{uri: 'https://github.com/justinzebra/img/blob/master/GGGGGGG.jpg?raw=true'}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailStyle0: {
    height: 430,
    width: 380,
    marginTop:-80
  },
});

export default DetailScreen;
