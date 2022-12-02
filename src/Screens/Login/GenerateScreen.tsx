import { useNavigation } from "@react-navigation/native";
import {
  View,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import { useState } from "react";
import * as Clipboard from "expo-clipboard";
export default function GenerateScreen() {
  let navigation = useNavigation();
  let [myRandomArray, setMyRandomArray] = useState([]);

  var wordarray = [
    "ahigh",
    "ahimsa",
    "ahimsas",
    "ahind",
    "ahing",
    "ahint",
    "ahistorical",
    "ahold",
    "ahorse",
    "ahorseback",
    "ahoy",
    "lowlighting",
    "lowlights",
    "lowlihead",
    "lowliheads",
    "lowlily",
    "lowliness",
    "lowlinesses",
    "lowly",
    "lown",
    "lownd",
    "lownded",
    "lownding",
    "lownds",
    "lowne",
    "lowned",
    "lownes",
    "selected",
    "selectee",
    "selectees",
    "selecting",
    "selection",
    "selections",
    "selective",
    "selectively",
    "selectivities",
    "selectivity",
    "selectness",
    "selectnesses"
  ];

  function getMultipleRandom() {
    let array = [];

    for (let i = 0; i < wordarray.length; i++) {
      var randomItem = wordarray[Math.floor(Math.random() * wordarray.length)];
      array.push(randomItem);
      if (i == 12) {
        return setMyRandomArray(array);
      }
    }
  } 
  ahoy lowlighting lowlights lowlihead lowliheads lowlily lowliness lowlinesses lowly lown lownd lownded

  const copyToClipboard = () => {
    let ok = myRandomArray.toString();
    return Clipboard.setString(ok);
  };
  const image = require("../../../assets/Vector.png");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Créer wallet</Text>
        <View style={styles.button1}>
          <Button
            title="générer les mots"
            onPress={() => {
              getMultipleRandom();
            }}
          />
        </View>

        <Text style={styles.red}>vos mots</Text>

        <TouchableOpacity onPress={() => copyToClipboard()}>
          <Text style={styles.titre}>
            {myRandomArray.map(e => {
              return e;
            })}
          </Text>
        </TouchableOpacity>
        <Text style={styles.red2}>Toucher pour copier*</Text>

        <View style={styles.button2}>
          <Button
            title="Suivant"
            onPress={() => {
              navigation.navigate("KeepWordScreen", {
                item: myRandomArray
              });
            }}
          ></Button>
        </View>
        <View style={styles.button3}>
          <Button
            color="white"
            title="Retour au menu précédent"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  red: {
    color: "white",
    fontSize: 20,

    marginLeft: 20
  },
  red2: {
    color: "white",
    fontSize: 15,

    marginLeft: 20
  },
  button1: {
    backgroundColor: "#F5EBB3",
    width: 180,
    height: 50,
    display: "flex",
    justifyContent: "center",
    marginLeft: 110,
    marginBottom: 20,
    borderRadius: 5,
    marginTop: 60
  },
  image: {
    flex: 1
  },
  container: {
    flex: 1
  },
  button2: {
    backgroundColor: "#F5EBB3",
    width: 180,
    height: 50,
    display: "flex",
    justifyContent: "center",
    marginLeft: 110,
    marginBottom: 20,
    marginTop: 40,
    borderRadius: 5
  },
  title: {
    color: "white",
    fontSize: 34,
    marginTop: 60,
    marginLeft: 110
  },
  titre: {
    padding: 10,
    backgroundColor: "#D9D9D9",
    opacity: 0.4,
    color: "white",
    width: 300,
    height: 180,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 5
  },
  button3: {
    marginTop: 120
  }
});
