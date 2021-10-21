import { View, TextInput, Text, Button, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUrlToFolder } from '../redux/folderSlice';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";

function UrlModal() {

    const dispatch = useDispatch();
    const folderData = useSelector((state) => state.folder)

    const [inputName, setInputName] = useState(``);
    const [inputUrl, setInputUrl] = useState(``);
    const [inputDescription, setInputDescription] = useState(``);
    const [whichFolder, setWhichFolder] = useState(``);
  
    const finalSubmission = () => {
      dispatch(addUrlToFolder({
        addedLink: {
          name: inputName,
          id: uuidv4(),
          url: inputUrl,
          description: inputDescription,
          isSelected: false
        },
        folderId: `${whichFolder}`,
      }))
    }

    const foldersInInput = () => {
        return folderData.map((folder) => (
          <Pressable 
            onPress={() => setWhichFolder(folder.id)}
            key={folder.id}
          >
            <Text style={{ color: "white", margin: 10, backgroundColor: "black", padding: 10 }}>
              {folder.folderName}
            </Text>
          </Pressable>
        ));
      };

    return (
        <View style={styles.inputModal}>
            <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={setInputName}
            value={inputName}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Url"
            onChangeText={setInputUrl}
            value={inputUrl}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Description"
            onChangeText={setInputDescription}
            value={inputDescription}
          />
          <View>
            <Text style={{ color: "white", margin: 20 }}>Choose A Folder</Text>
            <View>{foldersInInput()}</View>
          </View>
          <Button title="Submit" onPress={() => finalSubmission()} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputModal: {
        width: Dimensions.get(`window`).width,
        height: 200,
        backgroundColor: `#333`,
        alignItems: "center",
      },
      textInput: {
        width: "80%",
        height: 35,
        backgroundColor: "white",
        marginTop: 20,
      },
})

export default UrlModal
 