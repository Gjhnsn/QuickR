import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import { createQr } from "../utils/createQrApi";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Facebook",
    url: "facebook.com",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Yelp",
    url: "yelp.com",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Fresno State",
    url: "fresnostate.edu",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e293423",
    title: "TrenItalia",
    url: "https://www.trenitalia.com/en.html",
  },
];

const QrContainer = () => {
  const [currentQr, setCurrentQr] = useState(`test`);
  const [startCamera, setStartCamera] = useState(false);
  const [scanned, setScanned] = useState(false);

  const __startCamera = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    console.log(status);
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const handleQRCodeScan = ({ type, data }) => {
    setScanned(true);
    alert(`Code with type ${type} and data ${data} has been scanned`);
  };

  const Item = ({ title, url }) => (
    <Pressable onPress={() => setCurrentQr(createQr(url))}>
      <View style={styles.item} onClick={() => setCurrentQr(createQr(url))}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }) => <Item title={item.title} url={item.url} />;

  return (
    <SafeAreaView style={styles.container}>
      {startCamera ? (
        <View
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
          }}
        >
          <BarCodeScanner
            style={styles.cameraScreen}
            onBarCodeScanned={scanned ? undefined : handleQRCodeScan}
          >
            <View style={styles.cameraContainer}>
              <Pressable onPress={() => setStartCamera(false)} hitSlop={10}>
                <Ionicons name="md-close" size={40} color="white" />
              </Pressable>
            </View>
          </BarCodeScanner>
        </View>
      ) : (
        // home screen view
        <View style={styles.contentContainer}>
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: currentQr }}
          />
          <Pressable onPress={__startCamera} style={styles.button}>
            <Text style={styles.buttonText}>Scan</Text>
          </Pressable>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraScreen: {
    flex: 1,
  },
  cameraContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
    padding: 25,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    width: 130,
    borderRadius: 4,
    backgroundColor: "#14274e",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default QrContainer;
