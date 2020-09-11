import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

let colorPrimary = '#FF5722';

export const styles = StyleSheet.create({
	footer: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 20,
		paddingBottom: 20,
		justifyContent: 'center',
		alignItems: 'stretch',
		opacity: 0.5,
	},
	container: {
		flex: 1,
		backgroundColor: '#f7f7f7',
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 16,
		paddingBottom: 16
	},
	containerCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f7f7f7',
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 16,
		paddingBottom: 16
	},
	btn: {
		alignSelf: 'stretch',
		height: 48,
		backgroundColor: colorPrimary,
		marginBottom: 12,
		justifyContent: 'center',
		borderRadius: 6,

	},
	btnSmall: {
		alignSelf: 'stretch',
		height: 32,
		backgroundColor: colorPrimary,
		marginBottom: 0,
		justifyContent: 'center',
		borderRadius: 6
	},
	btnText: {
		color: '#fff',
		fontWeight: '400',
		fontSize: 14,
		justifyContent: 'center',
		textAlign: 'center'
	},
	heading: {
		marginBottom: 24,
		color: 'rgba(0, 0, 0, 0.85)',
		fontSize: 14,
		opacity: 0.5
	},
	card: {
		padding: 16,
		marginBottom: 16,
		alignSelf: 'stretch',
		borderRadius: 6,
		backgroundColor: '#FFF',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 4
	},
	label: {
		color: '#607D8B',
		fontSize: 10,
		marginBottom: 4,
		textTransform: 'uppercase'
	},
	bigLabel: {
		opacity: 0.8,
		fontSize: 15,
		marginBottom: 16,
		fontWeight: '500'
	},
	title: {
		color: '#000',
		fontSize: 22,
		fontWeight: '600',
		marginBottom: 4
	},
	year: {
		color: colorPrimary,
		fontSize: 13,
		marginBottom: 5,
		fontWeight: '600'
	},
	p: {
		fontSize: 14,
		opacity: 0.8,
		marginBottom: 18
	},
	black: {
		color: '#000'
	}
});
