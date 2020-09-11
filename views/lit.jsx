import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { rootUrl, group, categories, messages, literature } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Literature() {
	let url = `${rootUrl}${literature}`;
	const [ items, setItems ] = useState(null);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, []);

	const makeItems = (items) => {
		return items.map((item) => {
			return (
				<View
					style={{
						paddingTop: 16,
						marginBottom: 24,
						flexDirection: 'row'
					}}
					key={item.id}
				>
					<Text style={{color: '#FF5722', marginRight: 12}}>&#x2015;</Text>
					<Text>{item.opis}</Text>
				</View>
			);
		});
	};

	if (items) {
		return <ScrollView style={styles.container}>{makeItems(items)}</ScrollView>;
	} else {
		return (
			<View style={styles.containerCenter}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}
