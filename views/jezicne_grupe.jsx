import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { rootUrl, jezicneGrupe } from '../helpers/api_routes';

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
			console.log(item)
			return (
				<Button
					key={item.grupa}
					title={item.vrijednost}
					onPress={() =>
						props.navigation.navigate('Stavke', {
							lang: item.jezik
						})}
				/>
			);
		});
	};

	if (items) {
		if (items.length) {
			return (
				<React.Fragment>
					<View style={styles.container}>{items && mapItems(items)}</View>
				</React.Fragment>
			);
		} else {
			return <Text>Nema pronađenih zapisa!</Text>;
		}
	} else {
		return null;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
