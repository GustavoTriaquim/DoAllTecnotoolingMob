import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function SolicitacaoDetalhe() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // ← obtém o id da URL

  // Aqui você pode buscar os dados reais da solicitação (API, AsyncStorage, etc)
  const solicitacao = {
    id,
    titulo: `Solicitação ${id}`,
    status: "Em análise",
    data: "22/10/2025",
    descricao:
      "Esta é uma solicitação de exemplo. Aqui você pode mostrar todos os detalhes referentes à solicitação feita pelo usuário.",
  };

  return (
    <LinearGradient
      colors={["#f5f7fa", "#c3cfe2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Cabeçalho Verde */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>{"< VOLTAR"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>DETALHE DA SOLICITAÇÃO</Text>
        </View>

        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{ paddingBottom: 0.1 * height }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <Text style={styles.label}>Título</Text>
            <Text style={styles.value}>{solicitacao.titulo}</Text>

            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>{solicitacao.status}</Text>

            <Text style={styles.label}>Data</Text>
            <Text style={styles.value}>{solicitacao.data}</Text>

            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.value}>{solicitacao.descricao}</Text>
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
  },
  headerTitle: {
    color: "#fff",
    fontSize: 0.022 * height,
    fontWeight: "700",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: "30%",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 0.018 * height,
    fontWeight: "600",
  },
  scrollContainer: {
    paddingHorizontal: 0.05 * height,
    paddingTop: 0.03 * height,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 0.04 * height,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 0.02 * height,
    color: "#0A3D62",
    fontWeight: "700",
    marginBottom: 4,
  },
  value: {
    fontSize: 0.018 * height,
    color: "#333",
    marginBottom: 16,
  },
});