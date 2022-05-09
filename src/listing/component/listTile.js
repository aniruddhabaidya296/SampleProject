import React from 'react';
import { View, Text, Image } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import styles from './../styles';
import LocationIcon from '../../../assets/icons/location.svg';
import CalendarIcon from '../../../assets/icons/calendar.svg';
import CloseIcon from '../../../assets/icons/close.svg';

const ListTile = props => {
    return <SwipeRow
        leftOpenValue={0}
        closeOnRowPress={false}
        stopRightSwipe={props.statusText == "Draft" ? -80 : -160}
        rightOpenValue={props.statusText == "Draft" ? -80 : -160}
    >
        {props.statusText == "Draft" ? <View style={styles.standaloneRowBack}>
            <View style={styles.calendarBox}>
                <CloseIcon />
                <Text style={styles.hiddenText}>Delete{'\n'}Draft</Text>
            </View>
        </View> : <View style={styles.standaloneRowBack}>
            <View style={styles.accessBox}>
                <LocationIcon />
                <Text style={styles.hiddenText}>Manage{'\n'}Access</Text>
            </View>
            <View style={styles.calendarBox}>
                <CalendarIcon />
                <Text style={styles.hiddenText}>Manage{'\n'}Calendar</Text>
            </View>
        </View>}
        <View style={styles.listTile}>
            <View>
                <Image
                    height={100}
                    width={100}
                    style={styles.image}
                    resizeMethod='auto'
                    resizeMode='cover'
                    source={require('./../../../assets/images/car-zoom.png')} />
            </View>
            <View style={styles.listColumn}>
                <View style={props.statusText === "Live" ? styles.boxLive : styles.boxDraft}>
                    <Text style={props.statusText === "Live" ? styles.live : styles.draft}>
                        {props.statusText}
                    </Text>
                </View>
                <Text style={styles.listedInfo}>
                    {props.listedInfo}
                </Text>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.listedInfo}>
                    {props.listedInfo2}
                </Text>
            </View>
        </View>
    </SwipeRow>
}

export default ListTile;