import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push("/homeUser");
  };

  return (
    <LinearGradient
      colors={["#fff", "#d4d4d4"]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inner}
      >
        <Image 
          source={require("../assets/images/LogoDoAll.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>LOGIN</Text>

        <View style={styles.box}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput 
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>FAZER LOGIN</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Não possui login?</Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={styles.link}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.bottomBar}>
        <Text style={styles.bottomText}>CRM - LOGIN E CADASTRO</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0.03 * height,
  },
  logo: {
    width: 0.5 * width,
    height: 0.2 * height,
    marginBottom: 0.025 * height,
    marginTop: -0.05 * height,
  },
  title: {
    fontSize: 0.05 * height,
    fontWeight: "700",
    letterSpacing: 3,
    color: "#09374e",
    marginBottom: 0.009 * height,
  },
  box: {
    width: "100%",
    maxWidth: 0.9 * width,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 5,
    padding: 0.03 * height,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  label: {
    fontSize: 0.018 * height,
    color: "#333",
    marginBottom: 0.008 * height,
    fontWeight: "600",
  },
  input: {
    height: 0.055 * height,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 0.02 * height,
    marginBottom: 0.02 * height,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#128d51",
    paddingVertical: 0.018 * height,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 0.01 * height,
  },
  buttonText: {
    color: "#fff",
    fontSize: 0.022 * height,
    fontWeight: "500",
    letterSpacing: 1,
  },
  footer: {
    marginTop: 0.03 * height,
    alignItems: "center",
  },
  footerText: {
    color: "#161616",
    fontSize: 0.018 * height,
  },
  link: {
    color: "#09374e",
    marginTop: 0.008 * height,
    textDecorationLine: "underline",
    fontSize: 0.018 * height,
  },
  bottomBar: {
    backgroundColor: "#09374e",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0.01 * height,
  },
  bottomText: {
    color: "#fff",
    fontSize: 0.02 * height,
    fontWeight: "600",
    letterSpacing: 1,
  },
});