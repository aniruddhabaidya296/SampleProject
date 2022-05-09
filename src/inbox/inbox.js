import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './styles';

const Inbox = () => {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <View style={styles.latestTop}>
            <Text style={styles.latestHeader}>Inbox</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Inbox;