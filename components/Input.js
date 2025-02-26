import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Input() {
  const [number, setNumber] = useState("");
  const [validate, setValidate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    setNumber(phone);

    if (phoneRegex.test(phone)) {
      setErrorMessage("Số điện thoại hợp lệ!");
      setValidate(true);
    } else {
      setErrorMessage("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
      setValidate(false);
    }
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Nhập số điện thoại</Text>
      <Text style={styles.label}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
      </Text>
      <TextInput
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={number}
        onChangeText={validatePhoneNumber}
        style={styles.input}
      />
      {errorMessage ? (
        <Text style={[styles.error, validate && { color: "green" }]}>
          {errorMessage}
        </Text>
      ) : null}
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Button Pressed!")}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    padding: 30,
    gap: 30,
  },
  title: {
    fontWeight: "500",
    fontSize: 22,
  },
  label: {
    fontWeight: "400",
    fontSize: 22,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#fff",
    borderBottomColor: "black",
    borderWidth: 1,
    alignSelf: "center",
  },
  error: {
    fontWeight: "400",
    fontSize: 15,
    color: "red",
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
