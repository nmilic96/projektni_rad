import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Nav extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button
					onPress={console.log('press')}
					title="Learn More"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
				
				<Button
					onPress={console.log('press')}
					title="Learn More"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		);
	}
}

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
