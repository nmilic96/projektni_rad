import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Nav(props) {
	console.log(props)
	return (
		<View style={styles.container}>
			<Button
				onPress={() => props.navigate('Glagoljica')}
				title="Glagoljica"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>

			<Button
				onPress={() => props.navigate('Čirilica')}
				title="Čirilica"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	nav: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	btn: {
		color: '#fff',
	}
});
