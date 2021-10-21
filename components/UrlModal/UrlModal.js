import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUrlToFolder } from "../../redux/folderSlice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Input, InputModal } from "./styles";

function UrlModal() {
  const dispatch = useDispatch();
  const folderData = useSelector((state) => state.folder);

  const [inputName, setInputName] = useState(``);
  const [inputUrl, setInputUrl] = useState(``);
  const [inputDescription, setInputDescription] = useState(``);
  const [whichFolder, setWhichFolder] = useState(``);

  const finalSubmission = () => {
    dispatch(
      addUrlToFolder({
        addedLink: {
          name: inputName,
          id: uuidv4(),
          url: inputUrl,
          description: inputDescription,
          isSelected: false,
        },
        folderName: `${whichFolder}`,
      })
    );
  };

  const foldersInInput = () => {
    const folderKeys = Object.keys(folderData);
    return folderKeys.map((folder) => (
      <Pressable onPress={() => setWhichFolder(folder)} key={folder}>
        <Text
          style={{
            color: "white",
            margin: 10,
            backgroundColor: "black",
            padding: 10,
          }}
        >
          {folder}
        </Text>
      </Pressable>
    ));
  };

  return (
    <InputModal>
      <Input placeholder="Name" onChangeText={setInputName} value={inputName} />
      <Input placeholder="Url" onChangeText={setInputUrl} value={inputUrl} />
      <Input
        placeholder="Description"
        onChangeText={setInputDescription}
        value={inputDescription}
      />
      <View>
        <Text style={{ color: "white", margin: 20 }}>Choose A Folder</Text>
        <View>{foldersInInput()}</View>
      </View>
      <Button title="Submit" onPress={() => finalSubmission()} />
    </InputModal>
  );
}

export default UrlModal;
