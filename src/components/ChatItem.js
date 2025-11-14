import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Updated Avatar — shows image if available, otherwise initials
const Avatar = ({ name, image }) => {
  if (image) {
    return <Image source={image} style={styles.avatarImage} />;
  }

  const initials = name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('');
  return (
    <View style={styles.avatarFallback}>
      <Text style={{ color: '#fff', fontWeight: '700' }}>{initials}</Text>
    </View>
  );
};

export default function ChatItem({ item }) {
  return (
    <TouchableOpacity style={styles.row}>
      <Avatar name={item.name} image={item.image} />
      <View style={styles.center}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.msg} numberOfLines={1}>
            {item.msg}
          </Text>
          {item.unread > 0 && (
            <View style={styles.badge}>
              <Text style={{ color: '#fff' }}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f0e6de',
  },
  avatarImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12,
  },
  avatarFallback: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#ffd6b3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  center: { flex: 1 },
  name: { fontWeight: '700', color: '#3b2b23' },
  time: { color: '#b9835e' },
  msg: { color: '#8b7363', flex: 1 },
  badge: {
    backgroundColor: '#ff7b3a',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
});
