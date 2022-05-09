import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Inbox from '../inbox/inbox';
import Dashboard from '../dashboard/dashboard';
import Listing from '../listing/listing';
import styles from './styles';
import Calendar from '../calendar/calendar';
import colors from '../constants/colors';

const MyTabBar = ({ state, descriptors, navigation }) => {
  const tabBarLabel = (options, route) => {
    if (options.tabBarLabel !== undefined) {
      return options.tabBarLabel;
    } else if (options.title !== undefined) {
      return options.title;
    } else {
      return route.name;
    }
  };
  return (
    <View style={styles.barDecoration}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          console.log('onPress called', route);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        const TabIcon = () => {
          if (label === 'Dashboard') {
            return (
              <MaterialIcons
                name="dashboard"
                color={isFocused ? colors.theme.BLUE : colors.theme.GREY}
                size={24}
              />
            );
          } else if (label === 'Inbox') {
            return (
              <MaterialCommunityIcons
                name="chat-outline"
                color={isFocused ? colors.theme.BLUE : colors.theme.GREY}
                size={24}
              />
            );
          } else if (label === 'Listing') {
            return (
              <MaterialCommunityIcons
                name="menu"
                color={isFocused ? colors.theme.BLUE : colors.theme.GREY}
                size={24}
              />
            );
          } else if (label === 'Calendar') {
            return (
              <MaterialCommunityIcons
                name="calendar-month"
                color={isFocused ? colors.theme.BLUE : colors.theme.GREY}
                size={24}
              />
            );
          }
        };
        const selected = isFocused ? { selected: true } : {};
        return (
          <View style={{
            height: 50,
            flex: 1,
            borderTopColor: isFocused ? colors.theme.BLUE : colors.theme.GREY,
            borderTopWidth: isFocused ? 1 : 0,
          }}>
            {/* <View> */}
            <TouchableOpacity
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityState={selected}
              accessibilityLabel={
                options.tabBarAccessibilityLabel
              }
              // testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
              <TabIcon />
              <Text style={{
                color: isFocused ? colors.theme.BLUE : colors.theme.GREY,
                fontSize: 12
              }}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View >
  );
};

const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        // tabBarLabelStyle: {
        //   borderTopColor: colors.theme.BLUE,
        //   borderTopWidth: 5,
        //   backgroundColor: colors.theme.BLUE,
        // },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          // tabBarStyle: {
          //   borderTopColor: colors.theme.BLUE,
          //   borderTopWidth: 5,
          //   backgroundColor: colors.theme.BLUE,
          // },
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarBadge: 3
        }}
      />
      <Tab.Screen
        name="Listing"
        component={Listing}
        options={{
          tabBarLabel: 'Listing',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarBadge: 4
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;
