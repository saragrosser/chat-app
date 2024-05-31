import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { StyleSheet, LogBox, Alert } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// import Firestore
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  // Define a new state that represents the network connectivity status
  const connectionStatus = useNetInfo();
  // The web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBJCZLpKYVSB7P3ChaCgmzjnofLDYX4uGk",
    authDomain: "chatapp-b69b8.firebaseapp.com",
    projectId: "chatapp-b69b8",
    storageBucket: "chatapp-b69b8.appspot.com",
    messagingSenderId: "89777636057",
    appId: "1:89777636057:web:adb8c8852e1ea59ce934c8",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // Initialize Firebase Storage handler
  const storage = getStorage(app);

  // Network connectivity status
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
