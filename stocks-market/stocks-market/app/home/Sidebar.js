// Sidebar.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Sidebar = () => {
  const navigation = useNavigation();
  const [showIconNames, setShowIconNames] = useState(true);

  const toggleIconNames = () => {
    setShowIconNames(!showIconNames);
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.sidebar}>
       <View style={styles.sidebarTitle}>
          <TouchableOpacity >
            <View style={styles.sidebarBrand}>
              <Icon name="chart-line" size={24} color="white" style={styles.iconHeader} />
              <Text style={styles.sidebarText}>Stock Market</Text>
            </View>
          </TouchableOpacity>
        </View>
      <TouchableOpacity onPress={toggleIconNames} style={styles.menuIcon}>
        <Icon name="menu" size={24} color="white" />
      </TouchableOpacity>
      {showIconNames && (
        <View>
          <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.sidebarItem}>
            <Icon name="home" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Dashboard')} style={styles.sidebarItem}>
            <Icon name="archive" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Stocks')} style={styles.sidebarItem}>
          <Icon name="grid" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Stock & News</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Login')} style={styles.sidebarItem}>
          <Icon name="account" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Registration')} style={styles.sidebarItem}>
          <Icon name="lock" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Charts')} style={styles.sidebarItem}>
          <Icon name="chart-bar" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Charts</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Settings')} style={styles.sidebarItem}>
          <Icon name="cog" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Contact')} style={styles.sidebarItem}>
          <Icon name="email" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#2c3e50', 
    width: '40%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1, 
  },
  menuIcon: {
    marginBottom: 20,
  },
  sidebarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sidebarBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    marginRight: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  sidebarText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Sidebar;
