import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { rootUrl, group, categories, records, record } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function Record(props) {
	let url = `${rootUrl}${record(props.route.params.id, props.route.params.lang)}`;
	console.log('zapis', url);
	const [ item, setItem ] = useState(null);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItem(data));
	}, []);

	if (item) {
		console.log(item);
		return (
			<ScrollView style={styles.container}>
				<View style={styles.card} key={item.id}>
					{/* year */}
					<Text style={styles.year}>{item.godina}</Text>
					{/* title */}
					<Text style={styles.title}>{item.naziv}</Text>
					{/* location */}
					<Text style={styles.bigLabel}>
						{item.mjesto.trim().length ? item.mjesto : 'Nema podatka o mjestu'}
					</Text>
					{/* current location */}
					<Text style={styles.label}>Današnje počivalište</Text>
					<Text style={styles.p}>{item.danasnjePocivaliste ? item.danasnjePocivaliste : 'Nema podatka'}</Text>
					{/* script */}
					<Text style={styles.label}>Pismo</Text>
					<Text style={styles.p}>{item.pismo}</Text>
					{/* content */}
					<Text style={styles.label}>Sadržaj</Text>
					<Text style={styles.p}>{item.sadrzaj}</Text>
					{/* size */}
					<Text style={styles.label}>Veličina</Text>
					<Text style={styles.p}>{item.velicina.trim().length ? item.velicina : 'Nema podatka'}</Text>
					{/* interesting */}
					<Text style={styles.label}>Zanimljivosti</Text>
					<Text style={styles.p}>
						{item.zanimljivosti.trim().length ? item.zanimljivosti : 'Nema podatka'}
					</Text>
				</View>
			</ScrollView>
		);
	} else {
		return (
			<View style={styles.containerCenter}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}
