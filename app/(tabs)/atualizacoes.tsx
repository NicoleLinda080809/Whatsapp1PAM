import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const status = [
  { id: "1", nome: "Meu Status", visto: false, letra: "M" },
  { id: "2", nome: "Ana", visto: true, letra: "A" },
  { id: "3", nome: "Pedro", visto: false, letra: "P" },
  { id: "4", nome: "Carla", visto: true, letra: "C" },
  { id: "5", nome: "Lucas", visto: false, letra: "L" },
];

export default function Atualizacoes() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Meu Status */}
      <TouchableOpacity style={styles.meuStatus}>
        <View style={styles.avatarMeuStatus}>
          <Ionicons name="add" size={30} color="#FFF" />
        </View>
        <View>
          <Text style={styles.meuStatusNome}>Meu Status</Text>
          <Text style={styles.meuStatusText}>Toque para adicionar</Text>
        </View>
      </TouchableOpacity>

      {/* Título das atualizações recentes */}
      <Text style={styles.sectionTitle}>Atualizações recentes</Text>

      <FlatList
        data={status.filter(s => s.nome !== "Meu Status")}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.statusItem}>
            <View style={[styles.avatarStatus, item.visto && styles.avatarVisto]}>
              <Text style={styles.avatarLetra}>{item.letra}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.horario}>
                {item.visto ? "Visto hoje" : "Atualizado agora"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  meuStatus: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E8E8E8",
  },
  avatarMeuStatus: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#075E54",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarStatus: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#075E54",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarVisto: {
    backgroundColor: "#999",
  },
  avatarLetra: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  meuStatusNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  meuStatusText: {
    fontSize: 13,
    color: "#666",
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#666",
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E8E8E8",
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  horario: {
    fontSize: 13,
    color: "#666",
  },
});