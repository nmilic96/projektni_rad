import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 24,
		paddingBottom: 24
	},
	containerCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 24,
		paddingBottom: 24
	},
	btn: {
		alignSelf: 'stretch',
		height: 48,
		backgroundColor: '#a31810',
		marginBottom: 12,
		justifyContent: "center"
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
	}
});
