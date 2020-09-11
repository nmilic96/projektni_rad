import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { rootUrl, group, categories, messages } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function About(props) {
	let url = `${rootUrl}${messages(props.lang)}`;
	const [ items, setItems ] = useState(null);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, []);

	console.log(items);

	const makeGoal = (items) => {
		let header = items.find((item) => item.kljuc === 'ciljProjektaHeader_poruka');
		let message = items.find((item) => item.kljuc === 'ciljProjekta_poruka');

		return (
			<View style={styles.container}>
				<Text style={styles.title}>{header.opis}</Text>
				<Text style={{fontSize: 14, marginTop: 20, lineHeight: 26, textAlign: 'justify'}}>{message.opis}</Text>
			</View>
		);
	};

	if (items) {
		return <ScrollView style={styles.container}>{makeGoal(items)}</ScrollView>;
	} else {
		return (
			<View style={styles.containerCenter}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}
