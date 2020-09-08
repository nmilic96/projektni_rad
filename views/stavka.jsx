import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Button, Text, Image, ActivityIndicator } from 'react-native';
import { rootUrl, jezicneGrupe, stavke } from '../helpers/api_routes';
import { styles } from '../styles/styles';

export default function Stavka(props) {
	const [ items, setItems ] = useState(null);

	useEffect(() => {
		let url = `${rootUrl}/kategorija?id=${props.route.params.id}&grupa=2`;
		console.log(url);
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, []);

	const mapItems = (items) => {
		return items.map((item) => {
			return (
				<React.Fragment>
					<Image
						style={{ width: 312, height: 312, marginBottom: 24, backgroundColor: '#FAFAFA' }}
						source={{ uri: item.slikaPutanja }}
					/>
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.naziv}</Text>
				</React.Fragment>
			);
		});
	};

	if (items) {
		if (items.length) {
			return <View style={styles.containerCenter}>{items && mapItems(items)}</View>;
		} else {
			return (
				<View style={styles.containerCenter}>
					<Text>Zapisa nije pronađen</Text>
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
