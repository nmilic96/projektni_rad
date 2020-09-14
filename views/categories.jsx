import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { rootUrl, group, categories } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useRef } from 'react';

export default function Categories(props) {
	console.log(props);
	let url = `${rootUrl}${categories(props.route.params.id, props.route.params.lang)}`;
	const [ items, setItems ] = useState(null);
	const btnRef = useRef();

	useEffect(
		() => {
			fetch(url).then((response) => response.json()).then((data) => setItems(data));
		},
		[ props ]
	);

	const mapItems = (items) => {
		return items.map((item) => {
			console.log(item);
			return (
				<TouchableOpacity
					ref={btnRef}
					style={styles.btnImage}
					onPress={() =>
						props.navigation.navigate('Zapisi', {
							group: props.route.params.id,
							id: item.id,
							lang: props.route.params.lang
						})}
					key={item.id}
				>
					<Image
						source={{uri: `https://www.ffos.unios.hr/projekti/glagopedija/public/img/grupa/${item.slikaPutanja}`}}
						style={{ alignSelf: 'stretch', height: 200 }}
					/>
					<Text
						style={styles.btnImageLabel}
					>
						{item.naziv}
					</Text>
				</TouchableOpacity>
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
