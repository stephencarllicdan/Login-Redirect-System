import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Switch,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Email and Password required");
      return;
    }

    setIsLoggedIn(true);

    router.replace({
      pathname: "/dashboard",
      params: {
        email: email,
        logged: "true",
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <View style={styles.left}>

          <Text>Email</Text>
          <TextInput
            placeholder="Enter email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text>Password</Text>
          <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <View style={styles.row}>
            <Text style={styles.forgot}>Forgot Password?</Text>

            <View style={styles.rememberBox}>
              <Switch value={remember} onValueChange={setRemember} />
              <Text style={styles.rememberText}>
                Remember me
              </Text>
            </View>
          </View>

        </View>

        <TouchableOpacity
          style={styles.right}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>
            LOGIN
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#6b8794",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    flexDirection: "row",
    width: "85%",
    height: 220,
    backgroundColor: "#e5e5e5",
  },

  left: {
    flex: 2,
    justifyContent: "center",
    padding: 20,
  },

  right: {
    flex: 1,
    backgroundColor: "#1f2a30",
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 3,
  },

  input: {
    backgroundColor: "#cfcfcf",
    marginBottom: 12,
    padding: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  forgot: {
    fontSize: 12,
    color: "#555",
  },

  rememberBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  rememberText: {
    fontSize: 12,
    marginLeft: 5,
  },

});