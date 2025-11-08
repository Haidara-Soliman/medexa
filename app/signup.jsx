import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  client,
  databases,
  APPWRITE_DATABASE_ID,
  PATIENTS_COLLECTION_ID,
} from "../lib/appwrite";

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const createAccount = async () => {
    try {
      const response = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        PATIENTS_COLLECTION_ID,
        "unique()", // لإنشاء معرف تلقائي
        {
          email: email,
          password: password,
          name: name,
        }
      );

      Alert.alert("Your account has been created ", `${name}`);
    } catch (error) {
      Alert.alert("Something was wrong please try again ", error.message);
    }
  };

  return (
    <LinearGradient colors={["#8b6ecb", "#AE74C0"]} style={styles.container}>
      <Text style={styles.logo}>
        <FontAwesome name="plus-square" size={35} color="white" />
        {""} MediX
      </Text>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
        keyboardType="email-address"
      />
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

      <View style={styles.roleContainer}></View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={{
            width: 300,
            height: 35,
            backgroundColor: "rgba(247, 247, 247, 0.2)",
            alignItems: "center",
            borderRadius: 12,
          }}
          onPress={createAccount}
        >
          <Link href="/" style={styles.link} onPress={createAccount}>
            Submit
          </Link>
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
  link: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    padding:5,
    // textDecorationLine: 'underline',
  },
});
