import { View, FlatList, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setQr } from "../../redux/qrSlice";

function LinksContainer({ folderItems }) {
  const dispatch = useDispatch();

  const QrItem = ({ name, url }) => (
    <Pressable onPress={() => dispatch(setQr(url))}>
      <View style={styles.qrItem}>
        <Text style={styles.qrTitle}>{name}</Text>
      </View>
    </Pressable>
  );

  const renderQrItem = ({ item }) => <QrItem name={item.name} url={item.url} />;

  return (
    <View>
      <FlatList
        data={folderItems}
        renderItem={renderQrItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default LinksContainer;

const styles = StyleSheet.create({
  qrItem: {
    backgroundColor: "#A3C4BC",
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 25,
  },
  qrTitle: {
    fontSize: 22,
    color: "#fff",
  },
});
