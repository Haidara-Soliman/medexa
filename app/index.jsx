import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {
  client,
  databases,
  APPWRITE_DATABASE_ID,
  DOCTORS_COLLECTION_ID,
} from "../lib/appwrite";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function MedicalLoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //from ai
  const handleSubmit = async () => {
    try {
      const result = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        DOCTORS_COLLECTION_ID
      );
      Alert.alert("✅ الاتصال ناجح", `عدد المستندات: ${result.total}`);
      console.log("نتيجة الاتصال:", result);
    } catch (error) {
      Alert.alert("❌ فشل الاتصال", error.message);
      console.error("خطأ في الاتصال:", error);
    }
  };

  //from me
  // const handleSubmit = async () => {
  //   console.log("login form submitted: ", email, password);
  //   console.log(client);
  // };

  // const handleRoleSelect = (role) => {
  //   if (!email || !password) {
  //     Alert.alert("Please fill in your email and password");
  //     return;
  //   }
  //   Alert.alert(`You are logged in as ${role}`);
  // };

  return (
    <LinearGradient colors={["#8b6ecb", "#AE74C0"]} style={styles.container}>
      <Text style={styles.logo}>
        <FontAwesome name="plus-square" size={35} color="white" />
        {""} MediX
      </Text>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => handleRoleSelect("patient")}
        >
          <Ionicons name="person" size={40} color="#8b6ecb" />
          <Text style={styles.roleText}>
            I'm a {"\n"}
            Patient
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roleButton} onPress={handleSubmit}>
          <MaterialCommunityIcons name="doctor" size={40} color="#8b6ecb" />
          <Text style={styles.roleText}>I'm a{"\n"} doctor</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity
          style={{
            width: 300,
            height: 35,
            backgroundColor: "rgba(247, 247, 247, 0.2)",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Text style={styles.linkText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 65,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 50,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    color: "#000000ff",
    borderWidth: 1,
    borderColor: "#737070ff",
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  roleButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    display: "flex",
    gap: 10,
    flexDirection: "row",
    marginHorizontal: 5,
  },
  roleText: {
    color: "#8b6ecb",
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
  footerText: {
    color: "#eee",
    marginBottom: 10,
  },
  linkText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    // textDecorationLine: 'underline',
  },
});
