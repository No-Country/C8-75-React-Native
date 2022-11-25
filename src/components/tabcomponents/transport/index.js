import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const Transport = ({ navigation, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.text}>Transporte</Text>
        <Image
          source={require("../../../../assets/lineconfirm1.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.content2}>
        <Image source={require("../../../../assets/bus.png")} />
        <Text style={styles.text1}>{text}</Text>
      </View>
      <View style={styles.content2}>
        <Image source={require("../../../../assets/location.png")} />
        <Text style={styles.text1}>{text}</Text>
      </View>
      <View style={styles.content2}>
        <Image source={require("../../../../assets/location.png")} />
        <Text style={styles.text1}>{text}</Text>
      </View>
    </View>
  );
};

export default Transport;