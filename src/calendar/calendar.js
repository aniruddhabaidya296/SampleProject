import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './styles';

const Calendar = () => {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <View style={styles.latestTop}>
            <Text style={styles.latestHeader}>Calendar</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Calendar;