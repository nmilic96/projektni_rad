import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';
import { rootUrl, jezicneGrupe } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function JezicneGrupe(props) {
	let id = props.route.params.id;
	let url = `${rootUrl}${jezicneGrupe}${id}`;
	const [ items, setItems ] = useState(null);

	console.log(props);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, []);

	const mapItems = (items) => {
		return items.map((item) => {
			console.log(item);
			return (
				<TouchableOpacity
					style={styles.btn}
					key={item.grupa}
					onPress={() =>
						props.navigation.navigate('Stavke', {
							lang: item.jezik
						})}
				>
					<Text style={styles.btnText}>{item.vrijednost}</Text>
				</TouchableOpacity>
			);
		});
	};

	if (items) {
		if (items.length) {
			return <View style={styles.container}>{items && mapItems(items)}</View>;
		} else {
			return (
				<View style={styles.containerCenter}>
					<Text>Nema pronađenih zapisa!</Text>
				</View>
			);
		}
	} else {
		return (
			<View style={styles.containerCenter}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}
