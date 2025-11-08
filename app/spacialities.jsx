import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function SpecialitiesScreen() {

  const cardiologySp = useNavigation();
  const Opthalmology = useNavigation();
  const Neurology = useNavigation();
  const Orthopedic = useNavigation();
  const Pulmonology = useNavigation();
  const Urology = useNavigation();

  return (
    <LinearGradient colors={['#8b6ecb', '#AE74C0']} style={{height:'100%',}}>
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "500",
          color: "white",
          marginTop: 60,
          }}>Specialities</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => cardiologySp.navigate("doctors")}>
          <Icon name="heart-pulse" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Cardiology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Opthalmology.navigate("doctors")}>
          <Icon name="eye-outline" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Opthalmology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Neurology.navigate("doctors")}>
          <Icon name="stethoscope" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Neurology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Orthopedic.navigate("doctors")}>
          <Icon name="bone" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Orthopedic</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Pulmonology.navigate("doctors")}>
          <Icon name="lungs" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Pulmonology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => Urology.navigate("doctors")}>
          <Icon name="water" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Urology</Text>
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  grid: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "45%",
    height: 200,
    backgroundColor: "#F8F8FC",
    borderRadius: 15,
    paddingVertical: 60,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
});
