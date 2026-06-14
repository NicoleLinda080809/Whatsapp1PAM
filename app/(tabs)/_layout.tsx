import { Tabs } from "expo-router";
import { StatusBar, Text } from "react-native";
import { AntDesign, Ionicons} from '@expo/vector-icons'; 
import { View } from "react-native"; 

export default function TabsLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#075E54" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#075E54",
          tabBarInactiveTintColor: "#999",
          tabBarStyle: {
            backgroundColor: "#052b26",
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
            borderTopWidth: 0,  
            elevation: 0,       
          },
          headerStyle: {
            backgroundColor: "#075E54",
            shadowOpacity: 0,    
            elevation: 0,        
            borderBottomWidth: 0, 
          },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShadowVisible: false, 
        }}
      >
        <Tabs.Screen
  name="index"
  options={{
    title: "Whatsapp",
    headerRight: () => (
      <View style={{ flexDirection: "row", gap: 15, marginRight: 15 }}>
        <AntDesign name="camera" size={24} color="white" />
        <Ionicons name="ellipsis-vertical" size={24} color="white" />
      </View>
    ),
    tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>💬</Text>,
  }}
/>
        <Tabs.Screen
          name="ligacoes"
          options={{
            title: "Ligações",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>📞</Text>,
          }}
        />
        <Tabs.Screen
          name="atualizacoes"
          options={{
            title: "Atualizações",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>🔄</Text>,
          }}
        />
        <Tabs.Screen
          name="comunidade"
          options={{
            title: "Comunidade",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>👥</Text>,
          }}
        />
      </Tabs>
    </>
  );
}