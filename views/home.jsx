import React from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from '../styles/styles';
import Categories from './categories';
import Groups from './groups';

export default function Home(props) {
	console.log(props)
	return (
		<View style={styles.container}>
			<Groups {...props} />
		</View>
	);
};
