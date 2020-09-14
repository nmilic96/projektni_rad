import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { rootUrl, groups } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function Groups(props) {
	let url = `${rootUrl}${groups}${props.lang}`;
	let imagesUrl = `${rootUrl}${groups}${props.lang}`;
	const [ items, setItems ] = useState(null);
	const [ images, setImages ] = useState(null);

	useEffect(
		() => {
			fetch(url).then((response) => response.json()).then((data) => setItems(data));
			// fetch(images).then((response) => response.json()).then((data) => setImages(data));
		},
		[ props ]
	);

	const mapItems = (items) => {

		return items.map((item, index) => {
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
