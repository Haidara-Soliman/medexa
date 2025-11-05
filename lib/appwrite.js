import { Client, Account } from "react-native-appwrite";

export const client = new Client();

client.setProject("690b210f0024881a1799").setPlatform("dev.medix.medexa");

export const account = new Account(client);
