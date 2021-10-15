import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { creatQr } from '../utils/createQrApi';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Facebook',
      url: 'facebook.com',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Yelp',
      url: 'yelp.com',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fresno State',
      url: 'fresnostate.edu',
    },
  ];

  
  const QrContainer = () => {
    const [currentQr, setCurrentQr] = useState(``);

    const Item = ({ title, url }) => (
        <View 
            style={styles.item}
            onClick={() => setCurrentQr(creatQr(url))}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      );

    const renderItem = ({ item }) => (
      <Item 
      title={item.title}
      url={item.url} 
      />
    );
  
    return (
      <SafeAreaView style={styles.container}>
          <Image 
                style={{width: 300, height: 300}} 
                source={{uri:currentQr}}
            />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
  export default QrContainer;