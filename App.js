import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './screen/Main';
import Map from './screen/Map';
import Profile from './screen/Profile';
import { PaperProvider } from 'react-native-paper';
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <View style={styles.container}>
          <Tab.Navigator>
            <Tab.Screen
              name="Main"
              component={Main}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" black={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Map"
              component={Map}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="map" black={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="user-circle-o" black={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
