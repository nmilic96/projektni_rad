import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';
import { rootUrl, jezicneGrupe, stavke } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Stavke(props) {
	const [ items, setItems ] = useState([]);
	let ref = useRef([]);

	console.log('props', props);

	useEffect(() => {
		for (let i = 0; i < 30; i++) {
			let url = `${rootUrl}${stavke(i, props.route.params.lang)}`;
			fetch(url).then((response) => response.json()).then((data) => {
				if (data && data.length) {
					ref.current = [ ...ref.current, ...data ];
					setItems(ref.current);
				}
			});
		}
	}, []);

	const mapItems = (items) => {
		return items.map((item) => {
			console.log('item', item);
			return (
				<TouchableOpacity
					key={item.grupa}
					onPress={() =>
						props.navigation.navigate('Stavka', {
							id: item.kategorija,
							lang: item.jezik
						})}
					style={styles.btn}
				>
					<Text style={styles.btnText}>{item.vrijednost}</Text>
				</TouchableOpacity>
			);
		});
	};

	if (items.length) {
		return (
			<React.Fragment>
				<View style={styles.container}>{items && mapItems(items)}</View>
			</React.Fragment>
		);
	} else {
		return (
			<View style={styles.containerCenter}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}
