import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeScreen = () => {
	const navSpacialities = useNavigation();
	const navMessage = useNavigation();

	return (
		<LinearGradient colors={["#8b6ecb", "#AE74C0"]} style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.logoText}><FontAwesome name="plus-square" size={35} color="white" />
        {" "}MediX</Text>
			</View>

			<Text style={styles.tagline}>
				Medix connects you to trusted doctors and medical services—fast, simple,
				and right when you need it.
			</Text>
			<Image
				source={require("../assets/img/doctors.png")}
				style={styles.image}
				resizeMode="contain"
			/>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navSpacialities.navigate("spacialities")}>
					<Text style={styles.buttonText}>Explore Specialties</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => navMessage.navigate("message")}>
					<Text style={styles.buttonText}>Inbox</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		height: "651",
		alignItems: "center",
		paddingTop: 60,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	logoText: {
		fontSize: 32,
		color: "#fff",
		marginTop: 80,
		fontWeight: "bold",
	},
	tagline: {
		fontSize: 22,
		padding: 13,
		color: "#fff",
		marginTop: 31,
		textAlign: "center",
	},
	image: {
		height: 400,
		marginTop: 11,
	},
	buttonContainer: {
		marginTop: -60,
		width: "70%",
		display: "flex",
		flexDirection: "row",
		gap: 20,
	},
	button: {
		flexDirection: "row",
		backgroundColor: "#6e53b4",
		padding: 12,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		marginLeft: 5,
		padding: 5,
	},
});
