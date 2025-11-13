import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TabBar({ active='Chat', onPress }) {
  const tabs = ['Chat','Status','Calls'];
  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity key={tab} onPress={() => onPress(tab)} style={styles.tabWrap}>
          <View style={[styles.tab, active === tab && styles.activeTab]}>
            <Text style={[styles.label, active === tab && styles.activeLabel]}>{tab}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: '#fff0ea',
    padding: 6,
    borderRadius: 12,
    alignSelf: 'stretch'
  },
  tabWrap: { flex:1 },
  tab: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8
  },
  activeTab: {
    backgroundColor: '#ff7b3a',
    shadowColor: '#ff7b3a',
    elevation: 4
  },
  label: { color: '#b9835e', fontWeight: '600' },
  activeLabel: { color: '#fff' }
});
