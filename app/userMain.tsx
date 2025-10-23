import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function UserMain() {
  const router = useRouter();

  const [solicitacoes] = useState([
    { id: 1, titulo: "Sol. 1", status: "Em análise" },
  ]);

  const handleNovaSolicitacao = () => {
    router.push("/userSolicitacao");
  };

  const handleAbrirSolicitacao = (id: number) => {
    router.push({
      pathname: "/solicitacoes/[id]",
      params: { id: String(id) },
    })
  };

  return (
    <LinearGradient
      colors={["#f5f7fa", "#c3cfe2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleNovaSolicitacao}
        >
          <Text style={styles.headerButtonText}>NOVA SOLICITAÇÃO</Text>
        </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>SOLICITAÇÕES</Text>

          <View style={styles.grid}>
            {solicitacoes.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => handleAbrirSolicitacao(item.id)}
                activeOpacity={0.8}
              >
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <Text style={styles.cardStatus}>{item.status}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    backgroundColor: "#00994C",
    paddingVertical: 0.02 * height,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  headerButton: {
    backgroundColor: "#00994C",
  },
  headerButtonText: {
    color: "#fff",
    fontSize: 0.02 * height,
    fontWeight: "700",
    letterSpacing: 1,
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 0.03 * height,
  },
  title: {
    fontSize: 0.04 * height,
    fontWeight: "700",
    color: "#0A3D62",
    textAlign: "center",
    marginBottom: 0.04 * height,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: width * 0.28,
    height: height * 0.12,
    backgroundColor: "#76A9C6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 0.018 * width,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 0.018 * height,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
  },
  cardStatus: {
    fontSize: 0.016 * height,
    color: "#EAF0F1",
  },
});