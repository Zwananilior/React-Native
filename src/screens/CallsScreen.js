import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import TabBar from '../components/TabBar';
import FloatingButton from '../components/FloatingButton';

export default function CallsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>HALODEK</Text>
        <View style={styles.headerIcons}>
          <Text>🔍</Text>
        </View>
      </View>

      <TabBar active="Calls" onPress={(tab)=> navigation.navigate(tab)} />

      <View style={styles.center}>
        <Text style={styles.placeholder}>Calls screen content</Text>
      </View>

      <FloatingButton onPress={() => alert('Start new call')} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf6',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  title: {
    color: '#ff7b3a',
    fontSize: 20,
    fontWeight: '700'
  },
  center: { flex:1, alignItems:'center', justifyContent:'center' },
  placeholder: { color:'#b9835e' }
});
