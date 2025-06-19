// App.js
import React, { useState } from 'react';
import { View, FlatList, RefreshControl, StyleSheet, Text, SafeAreaView } from 'react-native';
import ChatItem from './components/ChatItem';
import GroupCallModal from './components/GroupCallModal';

const dummyChats = [
  { id: '1', name: 'Family Group', message: 'See you all at dinner!', time: '9:30 AM' },
  { id: '2', name: 'Friends', message: 'Game night was awesome!', time: '8:12 AM' },
  { id: '3', name: 'Work Team', message: 'Meeting rescheduled to 4 PM', time: 'Yesterday' },
];

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [groupCallVisible, setGroupCallVisible] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setGroupCallVisible(true);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem chat={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      <GroupCallModal visible={groupCallVisible} onClose={() => setGroupCallVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
