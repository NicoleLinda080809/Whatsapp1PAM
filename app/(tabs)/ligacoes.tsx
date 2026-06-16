import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ligacoes = [
  { id: "1", nome: "Mãe", tipo: "Recebida", horario: "19:30", data: "Hoje", letra: "M" },
  { id: "2", nome: "Pedro", tipo: "Perdida", horario: "15:20", data: "Ontem", letra: "P" },
  { id: "3", nome: "Ana", tipo: "Feita", horario: "10:15", data: "Ontem", letra: "A" },
  { id: "4", nome: "Vó", tipo: "Recebida", horario: "14:00", data: "Segunda", letra: "V" },
  { id: "5", nome: "João", tipo: "Perdida", horario: "09:30", data: "Domingo", letra: "J" },
];

export default function Ligacoes() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTabs}>
        <TouchableOpacity style={[styles.tab, styles.tabAtivo]}>
          <Text style={styles.tabTextoAtivo}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTexto}>Perdidas</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ligacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.ligacaoItem}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarLetra}>{item.letra}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <View style={styles.detalhesRow}>
                {item.tipo === "Recebida" && (
                  <Ionicons name="call-outline" size={14} color="#4CAF50" />
                )}
                {item.tipo === "Feita" && (
                  <Ionicons name="call-outline" size={14} color="#4CAF50" />
                )}
                {item.tipo === "Perdida" && (
                  <Ionicons name="call-outline" size={14} color="#FF4444" />
                )}
                <Text style={styles.detalhes}>
                  {item.tipo} • {item.data}, {item.horario}
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.botaoLigar}>
              <Ionicons name="call" size={22} color="#FFF" />
            </TouchableOpacity>
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
  headerTabs: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabAtivo: {
    borderBottomWidth: 3,
    borderBottomColor: "#075E54",
  },
  tabTexto: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  tabTextoAtivo: {
    fontSize: 14,
    color: "#075E54",
    fontWeight: "bold",
  },
  ligacaoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E8E8E8",
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#075E54",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarLetra: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
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
  detalhesRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  detalhes: {
    fontSize: 13,
    color: "#666",
  },
  botaoLigar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#075E54",
    justifyContent: "center",
    alignItems: "center",
  },
});