// components/ChatItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatItem = ({ chat }) => (
  <View style={styles.container}>
    <View style={styles.avatar} />
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.name}>{chat.name}</Text>
        <Text style={styles.time}>{chat.time}</Text>
      </View>
      <Text style={styles.message}>{chat.message}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
  message: {
    color: '#555',
  },
});

export default ChatItem;
