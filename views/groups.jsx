import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { rootUrl, groups } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function Groups(props) {
	let url = `${rootUrl}${groups}${props.lang}`;
	const [ items, setItems ] = useState(null);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, [props]);

	const mapItems = (items) => {
		return items.map((item) => {
			return (
				<TouchableOpacity
					style={styles.btn}
					onPress={() =>
						props.navigation.navigate('Kategorije', {
							id: item.id,
							lang: props.lang
						})}
					key={item.id}
				>
					<Text style={styles.btnText}>{item.naziv}</Text>
				</TouchableOpacity>
			);
		});
	};

	if (items) {
		return <React.Fragment>{items && mapItems(items)}</React.Fragment>;
	} else {
		return (
			<View style={styles.containerCenter}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}
