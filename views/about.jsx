import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { rootUrl, group, categories } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function Categories(props) {
	let url = `${rootUrl}${categories(props.route.params.id, props.route.params.lang)}`;
	console.log(url)
	const [ items, setItems ] = useState(null);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, []);


	const mapItems = (items) => {
		return items.map((item) => {
			console.log(item)
			return (
				<TouchableOpacity
					style={styles.btn}
					onPress={() =>
						props.navigation.navigate('Zapisi', {
							id: item.id,
							lang: props.route.params.lang
						})}
					key={item.id}
				>
					<Text style={styles.btnText}>{item.naziv}</Text>
				</TouchableOpacity>
			);
		});
	};

	if (items) {
		return <ScrollView style={styles.container}>{items && mapItems(items)}</ScrollView>;
	} else {
		return (
			<View style={styles.containerCenter}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}