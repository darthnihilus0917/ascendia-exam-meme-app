import React from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import useCachedImages from '../hooks/useCachedImages';

const MemeViewer = () => {
  const { memes, loading } = useCachedImages();

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Meme Viewer</Text>
        </View>
        <Swiper>
            {memes.map((meme, index) => (
            <View key={index} style={styles.slide}>
                <Image
                source={{ uri: meme.url }}
                style={styles.image}
                />
                <Text style={styles.text}>{meme.name}</Text>
            </View>
            ))}
        </Swiper>
        {loading && (
            <ActivityIndicator size="large" />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 150, // Add margin to the top
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default MemeViewer;
