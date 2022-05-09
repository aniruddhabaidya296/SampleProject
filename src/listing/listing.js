import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './styles';
import SearchIcon from '../../assets/icons/search.svg';
import Avatar from '../../assets/images/avatar.svg';
import LocationIcon from '../../assets/icons/location.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import CloseIcon from '../../assets/icons/close.svg';
import ListTile from './component/listTile';
import Octicons from 'react-native-vector-icons/Octicons';
import { SwipeRow } from 'react-native-swipe-list-view';

const Listing = () => {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.latestTop}>
          <Text style={styles.latestHeader}>Listings</Text>
          <View style={styles.container}>
            <SearchIcon />
            <Avatar />
          </View>
        </View>
        <View style={styles.group}>
          <View>
            <Text style={styles.heading}>Published</Text>
          </View>
          <ListTile
            statusText="Live"
            listedInfo="Listed: 11th March 21"
            title="Super awesome car"
            listedInfo2="BCOYK52 $54/day 4 Photos"
          />
        </View>
        <View style={styles.group}>
          <View>
            <Text style={styles.heading}>Drafts</Text>
          </View>
          <ListTile
            statusText="Draft"
            listedInfo="Only 4 more steps left"
            title="Super awesome car"
            listedInfo2="Click to complete & submit now"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Listing;
