import React from 'react';
import { View, Button, Text } from 'react-native';
import Langs from './langs';
import { styles } from '../styles/styles';

export default function Home({navigation}) {
	return (
		<View style={styles.container}>
			<Langs {...navigation} />
		</View>
	);
};
