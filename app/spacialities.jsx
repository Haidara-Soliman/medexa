import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function SpecialitiesScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "500",
          color: "#8b6ecb",
          marginTop: 60,
        }}
        onPress={console.log("object")}
      >
        Specialities
      </Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={console.log("object")}>
          <Icon name="heart-pulse" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Cardiology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="eye-outline" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Opthalmology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="stethoscope" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Neurology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="bone" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Orthopedic</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="lungs" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Pulmonology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="water" size={40} color="#8b6ecb" />
          <Text style={styles.label}>Urology</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  grid: {
    marginTop: 50,
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
