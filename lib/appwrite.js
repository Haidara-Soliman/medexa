import { Client, Account, Databases } from "react-native-appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("690c6e96000e9d65dd50")
  .setPlatform("com.medixa.medix");

export const account = new Account(client);
export const databases = new Databases(client);

export const APPWRITE_DATABASE_ID = "690c702e002107adf157";
export const PATIENTS_COLLECTION_ID = "patients";
export const DOCTORS_COLLECTION_ID = "doctors";
export const MESSAGE_COLLECTION_ID = "message";
