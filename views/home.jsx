import React from 'react';
import { View, Button, Text } from 'react-native';
import Jezici from './jezici';
import { styles } from '../styles/styles';

export default function Home({navigation}) {
	return (
		<View style={styles.container}>
			<Jezici {...navigation} />
		</View>
	);
};
