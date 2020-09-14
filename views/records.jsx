import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { rootUrl, group, categories, records } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function Records(props) {
	console.log(props)


	let url = `${rootUrl}${records(props.route.params.id, props.route.params.lang)}`;
	const [ items, setItems ] = useState(null);

	console.log(url)

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, [props]);

	const mapItems = (items) => {
		return items.map((item) => {
			return (
				<View style={styles.card} key={item.id}>
					<Text style={styles.year}>{item.godina}</Text>
					<Text style={styles.title}>{item.naziv}</Text>
					<Text style={styles.bigLabel}>{item.mjesto.trim().length ? item.mjesto : '-'}</Text>
					<Text style={styles.label}>Pismo</Text>
					<Text style={styles.p}>{item.pismo}</Text>
					<Text style={styles.label}>Sadržaj</Text>
					<Text style={styles.p}>{item.sadrzaj}</Text>
					<Text style={styles.label}>Veličina</Text>
					<Text style={styles.p}>{item.velicina.trim().length ? item.velicina : '-'}</Text>
					<TouchableOpacity
						style={styles.btnSmall}
						onPress={() =>
							props.navigation.navigate('Zapis', {
								id: item.id,
								category: item.kategorija,
								lang: item.jezik
							})}
					>
						<Text style={styles.btnText}>Prikaži</Text>
					</TouchableOpacity>
				</View>
			);
		});
	};

	if (items) {
		if (items.length) {
			return <ScrollView style={styles.container}>{items && mapItems(items)}</ScrollView>;
		} else {
			return (
				<View style={styles.containerCenter}>
					<Text>Nema pronađenih zapisa</Text>
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
