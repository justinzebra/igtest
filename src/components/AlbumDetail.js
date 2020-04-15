import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";

const AlbumDetail = ({ album, navigation }) => {
  return (
    <View style={styles.cardContainerStyle}>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle}

          source={{
            uri: album.thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text>{album.title}</Text>

        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('justin_zebra')}
        >
          <Image
            style={styles.imageStyle}
            source={{
              uri: album.image
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle0}

          source={require('../img/heart.png')}
        />
        <Image
          style={styles.thumbnailStyle1}

          source={require('../img/comment.png')}
        />
        <Image
          style={styles.thumbnailStyle1}

          source={require('../img/share.png')}
        />

      </View>
      <View style={styles.AAA}>
        <Text>{album.title}</Text>

      </View>
      <View style={styles.cardSectionStyle}>
        <Text>{album.text01}</Text>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  thumbnailStyle0: {
    height: 30,
    width: 30,
    margin: 5
  },
  thumbnailStyle1: {
    height: 25,
    width: 25,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {


    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    fontWeight: "bold"

  },
  AAA: {

    padding: 5,
    backgroundColor: "#fff",
    fontWeight: "bold"
  },
  imageStyle: {
    height: 300,
    width: null
  }
});

export default AlbumDetail;
