import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon from the library
import { useNavigation } from '@react-navigation/native';

const Header = ({ toggleTheme }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        {/* Add left side elements here */}
        <TouchableOpacity>
          <Icon name="select-search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerRight}>
        {/* Add right side elements here */}
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          <Icon name="brightness-7" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          <Icon name="message-badge" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          <Icon name="bell-ring" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          <Icon name="drag-vertical" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          <Icon name="account" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#2c3e50', 
    width: '70%', 
    position: 'absolute',
    top: 0,
    left: '30%', 
    zIndex: 0, 
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
