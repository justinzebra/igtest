import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const Header = (props) => {
  return (
      <View style={styles.headerStyle}>
      
        
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
    height: 1,
    paddingTop: 30,
   
    // Android Only
    elevation: 2
  },
  textStyle: {
    fontSize: 20
  },
});

export default Header;
