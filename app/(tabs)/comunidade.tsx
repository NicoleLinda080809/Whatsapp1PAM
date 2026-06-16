import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const comunidades = [
  { id: "1", nome: "Devs Brasil", membros: 234, letra: "D" },
  { id: "2", nome: "Etec Poá", membros: 89, letra: "F" },
  { id: "3", nome: "Família", membros: 12, letra: "F" },
  { id: "4", nome: "Amigos", membros: 45, letra: "A" },
];

export default function Comunidade() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Botão Nova Comunidade */}
      <TouchableOpacity style={styles.novaComunidade}>
        <View style={styles.avatarNovo}>
          <Ionicons name="people" size={24} color="#FFF" />
        </View>
        <Text style={styles.novaComunidadeText}>Nova comunidade</Text>
      </TouchableOpacity>

      <FlatList
        data={comunidades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.comunidadeItem}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarLetra}>{item.letra}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.membros}>
                <Ionicons name="people-outline" size={12} color="#666" /> {item.membros} membros
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#CCC" />
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
  novaComunidade: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#F0F0F0",
    margin: 15,
    borderRadius: 10,
  },
  avatarNovo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#075E54",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  novaComunidadeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#075E54",
  },
  comunidadeItem: {
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
  membros: {
    fontSize: 13,
    color: "#666",
  },
});