// NewsList.js

import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const NewsList = ({ articles }) => {
  return (
    <ScrollView>
    <View style={styles.newsList}>
      {articles.map((article) => (
        <View style={styles.newsCard} key={article.uuid}>
          <Image style={styles.cardImage} source={{ uri: article.image }} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{article.headline}</Text>
            <Text style={styles.cardSummary}>{article.summary}</Text>
            <Text
              style={styles.readMoreLink}
              onPress={() => Linking.openURL(article.qmUrl)}
            >
              Read more
            </Text>
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newsList: {
    flex: 1,
  },
  newsCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  cardImage: {
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardSummary: {
    fontSize: 14,
    marginBottom: 8,
  },
  readMoreLink: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});


export default NewsList;
