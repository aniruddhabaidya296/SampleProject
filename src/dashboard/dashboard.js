import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './styles';

const Dashboard = () => {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <View style={styles.latestTop}>
            <Text style={styles.latestHeader}>Dashboard</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;