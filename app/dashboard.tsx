import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  const { email, logged } = useLocalSearchParams();

  useEffect(() => {
    if (!logged) {
      router.replace("/login");
    }
  }, []);

  const goProfile = () => {
    router.push({
      pathname: "/profile",
      params: { email: email },
    });
  };

  const logout = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>

        <TouchableOpacity onPress={logout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <Text style={styles.welcome}>
          Welcome: {email}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.profileBtn}
        onPress={goProfile}
      >
        <Text style={styles.btnText}>
          Go to Profile
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#6b8794",
    paddingTop: 60,
    alignItems: "center",
  },

  header: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  logout: {
    color: "#1f2a30",
    fontWeight: "bold",
  },

  box: {
    width: "85%",
    backgroundColor: "#e5e5e5",
    padding: 20,
    marginBottom: 20,
  },

  welcome: {
    fontSize: 16,
  },

  profileBtn: {
    width: "85%",
    backgroundColor: "#1f2a30",
    padding: 15,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

});