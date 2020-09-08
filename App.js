import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { rootUrl, languages } from './helpers/api_routes';
import Nav from './components/nav/nav.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Jezici from './views/jezici';
import JezicneGrupe from './views/jezicne_grupe';
import Home from './views/home';
import Stavke from './views/stavke';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Početna"
					component={Home}
				/>
				<Stack.Screen
					name="Jezici"
					component={Jezici}
				/>
				<Stack.Screen
					name="Jezične grupe"
					component={JezicneGrupe}
				/>
				<Stack.Screen
					name="Stavke"
					component={Stavke}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
