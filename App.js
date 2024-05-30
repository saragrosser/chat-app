import Start from "./components/start";
import Chat from "./components/chat";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const Stack = createNativeStackNavigator();

const App = () => {
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

  return (
    /* Wrap the app with NavigationContainer */
    <NavigationContainer>
      {/* Create a stack navigator with initial route Start  */}
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat {...props} db={db} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
