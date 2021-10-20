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
  Dimensions,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { createQr } from "../utils/createQrApi";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { __startCamera } from "../utils/startCamera";
import { closeCamera, openCamera } from "../redux/startCameraSlice";
import { addUrlToFolder } from "../redux/folderSlice";

const QrContainer = () => {
  const [currentQr, setCurrentQr] = useState(`test`);
  const [scanned, setScanned] = useState(false);
  const isCameraOpen = useSelector((state) => state.camera.setStartCamera);
  const folderData = useSelector((state) => state.folder);
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState(``);
  const [inputUrl, setInputUrl] = useState(``);
  const [inputDescription, setInputDescription] = useState(``)


const finalSubmission = () => {
  dispatch(addUrlToFolder(
    {
      name: inputName, 
      id:`arandomid`, 
      url: inputUrl, 
      description: inputDescription, 
      isSelected: false
    }
  ));
}



  const handleQRCodeScan = ({ type, data }) => {
    setScanned(true);
    alert(`Code with type ${type} and data ${data} has been scanned`);
  };

  const FolderItem = ({ folderName, items }) => (
    <Pressable onPress={() => console.log(alert("clicked"))}>
      <View style={styles.folderItem}>
        <Text style={styles.title}>{folderName}</Text>
        <FlatList
          data={items}
          renderItem={renderQrItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Pressable>
  );

  const renderFolderItem = ({ item }) => (
    <FolderItem folderName={item.folderName} items={item.items} />
  );

  const QrItem = ({ name, url }) => (
    <Pressable onPress={() => setCurrentQr(createQr(url))}>
      <View style={styles.qrItem}>
        <Text style={styles.qrTitle}>{name}</Text>
      </View>
    </Pressable>
  );

  const renderQrItem = ({ item }) => <QrItem name={item.name} url={item.url} />;


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <View style={styles.inputModal}>
        <TextInput 
          style={styles.textInput}
          placeholder='Name'
          onChangeText={setInputName}
          value={inputName}

        />
        <TextInput 
          style={styles.textInput}
          placeholder='Url'
          onChangeText={setInputUrl}
          value={inputUrl}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Description'
          onChange={setInputDescription}
          value={inputDescription}
        />
        <Button 
          title='Submit'
          onPress = {() => finalSubmission()}
        />
      </View>

      {isCameraOpen ? (
        //camera is open
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
              <Pressable onPress={() => dispatch(closeCamera())} hitSlop={10}>
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
          <Pressable
            onPress={() => __startCamera(dispatch(openCamera()))}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Scan</Text>
          </Pressable>
          <FlatList
            data={folderData}
            renderItem={renderFolderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}

      <StatusBar style="auto" />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputModal: {
    width:Dimensions.get(`window`).width,
    height: Dimensions.get(`window`).height,
    backgroundColor: `#333`,
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    height: 35,
    backgroundColor: 'white',
    marginTop: 20,
    
  },
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
  folderItem: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  qrItem: {
    backgroundColor: "#A3C4BC",
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 25,
  },
  title: {
    fontSize: 32,
  },
  qrTitle: {
    fontSize: 22,
    color: "#fff",
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
