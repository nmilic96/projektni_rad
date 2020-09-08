import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Nav(props) {
	return (
		<View style={styles.container}>

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
		fontSize: '20px'
	}
});
