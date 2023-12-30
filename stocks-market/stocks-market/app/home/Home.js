import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon from the library

function Home() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTitle}>
        <Text style={styles.titleText}>HOME</Text>
      </View>

      <View style={styles.mainCards}>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Stock</Text>
            <Icon name="chart-bar" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>1000</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>News</Text>
            <Icon name="email" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>10</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Charts</Text>
            <Icon name="chart-bar" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>5</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Settings</Text>
            <Icon name="cog" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    marginLeft:200,
    marginTop:80,
  },
  mainTitle: {
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainCards: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: "center",
  },
  cardInner: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 18,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
