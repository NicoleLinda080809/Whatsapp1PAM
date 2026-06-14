import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const conversas = [
  { id: "1", nome: "Mãe", msg: "Tá jantando?", hora: "19:30", letra: "M" },
  { id: "2", nome: "Tia", msg: "Oi", hora: "19:20", letra: "T" },
  { id: "3", nome: "2DSM", msg: "Vou trancar o curso", hora: "15:00", letra: "2" },
  { id: "4", nome: "Pai", msg: "Eita", hora: "12:30", letra: "P" },
  { id: "5", nome: "Alexandre Cabeludo", msg: "Cade o trabalho?", hora: "11:45", letra: "A" },
  { id: "6", nome: "Irmã", msg: "ok!", hora: "08:20", letra: "I" },
];

export default function Conversas() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={conversas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.conversaItem}>

            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarLetra}>{item.letra}</Text>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.hora}>{item.hora}</Text>
              </View>
              

              <Text style={styles.mensagem}>{item.msg}</Text>
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
    backgroundColor: "#052b26",
  },
 
  
  conversaItem: {
    flexDirection: "row",
    padding: 15,
    
    
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

  infoNome: {          
    fontSize: 16,
    fontWeight: "bold",
    color: "#",
    marginBottom: 5,
  },
  avatarLetra: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
  
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  hora: {
    fontSize: 12,
    color: "#999",
  },
  mensagem: {
    fontSize: 14,
    color: "#a8a6a6",
  },
});