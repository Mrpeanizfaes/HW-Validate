import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Input from "../components/Input";

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Input />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
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
});
