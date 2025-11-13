import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ChatItem from '../components/ChatItem';
import TabBar from '../components/TabBar';
import FloatingButton from '../components/FloatingButton';

const DATA = [
  { id: '1', name: 'Faza Dzikrulloh', msg: 'Typing...', time: '14.30', unread: 0,image: require('../../assets/images/2.jpg') },
  { id: '2', name: 'Hatypo Studio', msg: 'Faza Can you help me to do with new project...', time: '14.30', unread: 2 },
  { id: '3', name: 'Zhofran A', msg: 'I think we should upgrade the social media...', time: '14.00', unread: 2 },
  { id: '4', name: 'Vito Arvy', msg: 'Okay adhit, I\'ll tell faza about it 👍🏼', time: '13.40', unread: 0 },
  { id: '5', name: 'Raul', msg: 'Thanks Raul!! 🙏✨', time: 'Yesterday', unread: 0 },
  { id: '6', name: 'Farhan Bagas', msg: 'Great work farhan! 👏 I\'ll tell faza about logo...', time: '29/08/22', unread: 0 },
  { id: '7', name: 'Abdull', msg: 'Perfecto!🔥 I will check it later', time: '28/08/22', unread: 0 },
  { id: '8', name: 'Ibe hatypo', msg: 'nicely done bro!👍🏻', time: '', unread: 0 }
];

export default function ChatListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>HALODEK</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn}><Text>🔍</Text></TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}><Text>⋮</Text></TouchableOpacity>
        </View>
      </View>

      <TabBar active="Chat" onPress={(tab)=> navigation.navigate(tab)} />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingBottom: 140}}
        renderItem={({item}) => <ChatItem item={item} />}
        style={{flex:1}}
      />

      <FloatingButton onPress={() => alert('Floating button pressed')} />

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
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconBtn: {
    marginLeft: 12
  }
});
