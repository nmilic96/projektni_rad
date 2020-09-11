import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { rootUrl, langs } from '../helpers/api_routes';
import { styles } from '../styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function Langs(props) {
	let url = `${rootUrl}${langs}`;
	const [ items, setItems ] = useState(null);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, []);

	const mapItems = (items) => {
		return items.map((item) => {
			return (
				<TouchableOpacity
					onPress={() => {
						props.setLang(item.id);
						props.setModalVisible(!props.modalVisible);
					}}
					key={item.id}
				>
					<Text
						style={{ fontSize: 16, marginBottom: 24, fontWeight: props.lang === item.id ? '600' : '400' }}
					>
						{item.naziv}
					</Text>
				</TouchableOpacity>
			);
		});
	};

	if (items) {
		return <View style={{ padding: 16 }}>{items && mapItems(items)}</View>;
	} else {
		return (
			<View style={styles.containerCenter}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}
