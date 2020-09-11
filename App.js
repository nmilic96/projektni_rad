import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/home';
import { styles } from './styles/styles';
import Langs from './views/langs';
import Groups from './views/groups';
import Categories from './views/categories';
import Records from './views/records';
import Record from './views/record';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Odaberi jezik" component={Home} />
				<Stack.Screen name="Jezici" component={Langs} />
				<Stack.Screen name="Grupe" component={Groups} />
				<Stack.Screen name="Kategorije" component={Categories} />
				<Stack.Screen name="Zapisi" component={Records} />
				<Stack.Screen name="Zapis" component={Record} />
			</Stack.Navigator>
			<View style={styles.footer}>
				<Text>{new Date().getFullYear()}</Text>
			</View>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
