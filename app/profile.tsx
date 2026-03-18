import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Profile() {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const goBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>

        <Text style={styles.title}>
          Profile
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Email:
          </Text>
          <Text style={styles.value}>
            {email}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Account Status:
          </Text>
          <Text style={styles.value}>
            Logged In
          </Text>
        </View>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={goBack}
        >
          <Text style={styles.btnText}>
            Back to Dashboard
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
    width: "85%",
    backgroundColor: "#e5e5e5",
    padding: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoBox: {
    backgroundColor: "#d6d6d6",
    padding: 12,
    marginBottom: 10,
  },

  label: {
    fontWeight: "bold",
  },

  value: {
    fontSize: 14,
  },

  backBtn: {
    marginTop: 15,
    backgroundColor: "#1f2a30",
    padding: 15,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

});