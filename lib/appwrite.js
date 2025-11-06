import { Client, Account } from "react-native-appwrite";

export const client = new Client();

client.setProject("690c6e96000e9d65dd50").setPlatform("com.medixa.medix");

export const account = new Account(client);
