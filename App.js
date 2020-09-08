import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { rootUrl, languages } from './helpers/api_routes';
import Nav from './components/nav/nav.jsx';

export default function App() {
	let url = `${rootUrl}${languages}`;
	const [items, setItems] = useState(null)

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((data) => setItems(data));
	}, []);

	const mapItems = (items) => {
		return items.map(item => {
			console.log(item)
			return <Button key={item.id} title={item.naziv} />
		})
	}

	return (
			<React.Fragment>
				<Nav />
				<View style={styles.container}>
					<p />
					<Text>Open up App.js to start working on your app!</Text>
					{items && mapItems(items)}
					<StatusBar style="auto" />
				</View>
			</React.Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
