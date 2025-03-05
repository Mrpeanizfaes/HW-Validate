import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ route }) {
  const nav = useNavigation();
  const phoneNumber = route.params?.phoneNumber;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.phoneNumber}>Số điện thoại: {phoneNumber}</Text>
        <TouchableOpacity style={styles.button} onPress={() => nav.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 30,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  phoneNumber: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    paddingBottom: 40,
  },
  button: {
    width: "100%",
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
