import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { rootUrl, jezicneGrupe, stavke } from '../helpers/api_routes';

export default function Stavke(props) {
	const [ items, setItems ] = useState([]);
	let ref = useRef([])

	useEffect(() => {
		for (let i = 0; i < 30; i++) {
			let url = `${rootUrl}${stavke(i, props.route.params.lang)}`;
			fetch(url).then((response) => response.json()).then((data) => {
				if (data && data.length) {
					ref.current = [...ref.current, ...data]
					setItems(ref.current)
				}
			});
		}
	}, []);

	const mapItems = (items) => {
		return items.map((item) => {
			return <Button key={item.grupa} title={item.vrijednost} />;
		});
	};

	if (items) {
		if (items.length) {
	console.log(ref.current)

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
