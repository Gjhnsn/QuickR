import { View, StyleSheet } from 'react-native';
import React from 'react';
import IndividualFolder from './IndividualFolder';
import { useSelector } from 'react-redux';

function FolderContainer() {
    const folderData = useSelector((state) => state.folder);

    const renderFolder = () => {
        return (
            folderData.map((folder) => {
                return <IndividualFolder folder={folder} />
            })
        )
    }

    return (
        <View style={styles.container}>
            {renderFolder()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 220,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
});

export default FolderContainer
