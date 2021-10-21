import { View, FlatList, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setQr } from "../../../redux/qrSlice"
import {QrLink, QrTitle} from './styles'

function LinksContainer({ folderItems }) {
  const dispatch = useDispatch();

  const QrItem = ({ name, url }) => (
    <Pressable onPress={() => dispatch(setQr(url))}>
      <QrLink>
        <QrTitle>{name}</QrTitle>
      </QrLink>
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
