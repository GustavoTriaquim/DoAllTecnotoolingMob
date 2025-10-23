import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function HomeUserScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#f5f7fa", "#c3cfe2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Image 
            source={require("../assets/images/LogoDoAll.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>MENU PRINCIPAL</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/userSolicitacao")}
          >
            <Text style={styles.buttonText}>NOVA SOLICITAÇÃO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/userMain")}
          >
            <Text style={styles.buttonText}>MINHAS SOLICITAÇÕES</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    flex: 1,
  },
  logo: {
    width: 0.5 * width,
    height: 0.2 * height,
    marginBottom: 0.025 * height,
  },
  title: {
    fontSize: 0.045 * height,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#0A3D62",
    marginBottom: 0.06 * height,
  },
  button: {
    backgroundColor: "#00994C",
    paddingVertical: 0.02 * height,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 0.03 * height,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 0.022 * height,
    fontWeight: "700",
    letterSpacing: 1,
  },
});