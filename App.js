import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/home';
import { styles } from './styles/styles';
import Groups from './views/groups';
import Categories from './views/categories';
import Records from './views/records';
import Record from './views/record';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Langs from './components/langs';

const Stack = createStackNavigator();

export default function App() {
	const [ lang, setLang ] = useState('hr');
	const [ modalVisible, setModalVisible ] = useState(false);
	const navRef = useRef();

	useEffect(() => {
		navRef.current?.navigate('Početna')
	}, [lang])

	return (
		<React.Fragment>
			<NavigationContainer ref={navRef}>
				<Stack.Navigator
					screenOptions={{
						headerRight: () => (
							<View style={styles.row}>
								<Text style={{ marginRight: 16, textTransform: 'uppercase' }}>{lang}</Text>
								<TouchableOpacity
									onPress={() => {
										setModalVisible(!modalVisible);
									}}
								>
									<Text style={{ fontSize: 22, marginRight: 16 }}>&#9776;</Text>
								</TouchableOpacity>
							</View>
						)
					}}
				>
					<Stack.Screen name="Početna">{(props) => <Home {...props} lang={lang} />}</Stack.Screen>
					<Stack.Screen name="Grupe" component={Groups} />
					<Stack.Screen name="Kategorije" component={Categories} />
					<Stack.Screen name="Zapisi" component={Records} />
					<Stack.Screen name="Zapis" component={Record} />
				</Stack.Navigator>
				<View style={styles.footer}>
					<Text>{new Date().getFullYear()}</Text>
					<View style={styles.row}>
						<TouchableOpacity>
							<Text style={styles.footerLink}>O projektu</Text>
						</TouchableOpacity>
						<Text style={styles.footerLink}>Popis literature</Text>
					</View>
				</View>
				<StatusBar style="auto" />
				{modalVisible && (
					<View animationType="slide" transparent={false} style={styles.modal} visible={modalVisible}>
						<TouchableOpacity
							style={styles.closeBtn}
							onPress={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<Text style={{ fontSize: 28 }}>×</Text>
						</TouchableOpacity>
						<Langs
							lang={lang}
							setLang={setLang}
							modalVisible={modalVisible}
							setModalVisible={setModalVisible}
						/>
					</View>
				)}
			</NavigationContainer>
		</React.Fragment>
	);
}
