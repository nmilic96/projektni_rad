import React from 'react';
import { View, Button, Text } from 'react-native';
import Jezici from './jezici';

const Home = ({navigation}) => {
	return (
		<View>
			<Text style={{fontSize: 20, fontWeight: 'bold'}}>Odaberi jezik</Text>
			<Jezici {...navigation} />
		</View>
	);
};

export default Home;
