import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator, Image, Dimensions } from 'react-native';
import { rootUrl, jezicneGrupe, stavke } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function Stavke(props) {
	const [ items, setItems ] = useState([]);
	const [ headerImg, setHeaderImg ] = useState(null);
	let ref = useRef([]);

	const dimensions = Dimensions.get('window');
	const imageWidth = dimensions.width;

	console.log('props', props);
	console.log(headerImg);

	useEffect(() => {
		for (let i = 0; i < 30; i++) {
			let url = `${rootUrl}${stavke(i, props.route.params.lang)}`;
			fetch(url).then((response) => response.json()).then((data) => {
				if (data && data.length) {
					ref.current = [ ...ref.current, ...data ];
					setItems(ref.current);
				}
			});
		}

		let imgUrl = `${rootUrl}/kategorija?id=${1}&grupa=2`;
		fetch(imgUrl).then((response) => response.json()).then((data) => {
			console.log('data', data);
			setHeaderImg(data[0] && data[0].slikaPutanja);
		});
	}, []);

	const mapItems = (items) => {
		return items.map((item) => {
			console.log('item', item);
			return (
				<TouchableOpacity
					key={item.grupa}
					onPress={() =>
						props.navigation.navigate('Stavka', {
							id: item.kategorija,
							lang: item.jezik
						})}
					style={styles.btn}
				>
					<Text style={styles.btnText}>{item.vrijednost}</Text>
				</TouchableOpacity>
			);
		});
	};

	if (items.length) {
		return (
			<ScrollView>
				{headerImg ? (
					<Image source={{ uri: headerImg }} style={{ height: 300, width: imageWidth }} />
				) : (
					<ActivityIndicator size="large" />
				)}
				<View style={styles.container}>{items && mapItems(items)}</View>
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
