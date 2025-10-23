import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function UserSolicitacao() {
  const router = useRouter();

  const [pessoaFisica, setPessoaFisica] = useState<string | null>(null);
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleSubmit = () => {
    router.push("/homeUser");
  };

  return (
    <LinearGradient
      colors={["#f5f7fa", "#c3cfe2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>NOVA SOLICITAÇÃO</Text>

          <Text style={styles.label}>Pessoa Física?</Text>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              style={[
                styles.selectButton,
                pessoaFisica === "sim" && styles.selected,
              ]}
              onPress={() => setPessoaFisica("sim")}
            >
              <Text
                style={[
                  styles.selectText,
                  pessoaFisica === "sim" && styles.selectedText,
                ]}
              >
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.selectButton,
                pessoaFisica === "nao" && styles.selected,
              ]}
              onPress={() => setPessoaFisica("nao")}
            >
              <Text
                style={[
                  styles.selectText,
                  pessoaFisica === "nao" && styles.selectedText,
                ]}
              >
                Não
              </Text>
            </TouchableOpacity>
          </View>

          {pessoaFisica === "sim" && (
            <>
              <Text style={styles.label}>CPF</Text>
              <MaskedTextInput 
                mask="999.999.999-99"
                onChangeText={(text) => setCpf(text)}
                value={cpf}
                keyboardType="numeric"
                style={styles.input}
              />

              <Text style={styles.label}>Nome Completo (para contato)</Text>
              <TextInput 
                style={styles.input}
                value={nome}
                onChangeText={setNome}
              />
            </>
          )}

          {pessoaFisica === "nao" && (
            <>
              <Text style={styles.label}>CNPJ</Text>
              <MaskedTextInput
                mask="99.999.999/9999-99"
                onChangeText={(text) => setCnpj(text)}
                value={cnpj}
                keyboardType="numeric"
                style={styles.input}
              />

              <Text style={styles.label}>Razão Social</Text>
              <TextInput
                style={styles.input}
                value={razaoSocial}
                onChangeText={setRazaoSocial}
              />
            </>
          )}

          <Text style={styles.label}>E-mail (para contato)</Text>
          <TextInput 
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Endereço físico</Text>
          <TextInput
            style={[styles.input, { height: 0.08 * height }]}
            value={endereco}
            onChangeText={setEndereco}
            multiline
          />

         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>ENVIAR SOLICITAÇÃO</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  scrollContainer: {
    padding: 0.03 * height,
    paddingBottom: 0.15 * height,
  },
  title: {
    fontSize: 0.045 * height,
    fontWeight: "700",
    color: "#0A3D62",
    textAlign: "center",
    marginBottom: 0.04 * height,
  },
  label: {
    fontSize: 0.018 * height,
    fontWeight: "600",
    color: "#333",
    marginBottom: 0.008 * height,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 0.02 * height,
    height: 0.055 * height,
    backgroundColor: "#fff",
    marginBottom: 0.02 * height,
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 0.02 * height,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 7,
    paddingVertical: 0.015 * height,
    paddingHorizontal: 0.05 * height,
    backgroundColor: "#fff",
  },
  selected: {
    backgroundColor: "#00994C",
    borderColor: "#00994C",
  },
  selectText: {
    color: "#333",
    fontWeight: "600",
  },
  selectedText: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#00994C",
    paddingVertical: 0.018 * height,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 0.02 * height,
  },
  buttonText: {
    color: "#fff",
    fontSize: 0.022 * height,
    fontWeight: "700",
    letterSpacing: 1,
  },
});