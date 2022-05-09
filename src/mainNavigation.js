import React, { useEffect } from 'react'
import Calendar from './calendar/calendar'
import Dashboard from './dashboard/dashboard'
import Listing from './listing/listing'
import Inbox from './inbox/inbox'
import HomePage from './components/bottomTabBar'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()
const MainNavigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomePage"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Inbox" component={Inbox} />
                <Stack.Screen name="Calendar" component={Calendar} />
                <Stack.Screen name="Listing" component={Listing} />
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>);
}
export default MainNavigation;
