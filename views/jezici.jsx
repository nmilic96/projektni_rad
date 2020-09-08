import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { rootUrl, jezici } from '../helpers/api_routes';

export default function Jezici(props) {
	let url = `${rootUrl}${jezici}`;
	const [ items, setItems ] = useState(null);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, []);

	const mapItems = (items) => {
		return items.map((item) => {
			console.log(item)
			return (
				<Button
				style={{alignSelf: 'stretch'}}
					onPress={() =>
						props.navigate('Jezične grupe', {
							id: item.id
						})}
					key={item.id}
					title={item.naziv}
				/>
			);
		});
	};

	return <View style={styles.container}>{items && mapItems(items)}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
