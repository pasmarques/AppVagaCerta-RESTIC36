import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../utils/Types';
import { NavigationProp } from '@react-navigation/core'; // Para usar NavigationProp

interface AuthContextData {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    async function loadUserStorageData() {
      try {
        const storedUser = await AsyncStorage.getItem('@App:user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Erro ao carregar dados do AsyncStorage:', error);
      } finally {
        setIsLoading(false);
      }
    }
  
    loadUserStorageData();
  }, []);
  

  const signIn = async (email: string, senha: string) => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos, email e senha');
      return;
    }

    try {
      const response = await api.get('/api/usuarios');
      const users = response.data.usuarios;

      const authenticatedUser = users.find(
        (u: User) => u.email === email && u.senha === senha
      );

      if (authenticatedUser) {
        setUser(authenticatedUser);

        // Salva o usuário no AsyncStorage
        await AsyncStorage.setItem('@App:user', JSON.stringify(authenticatedUser));
        navigation.navigate('Auth', { screen: 'Home' });
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível conectar à API');
    }
  };

  // Realiza logout
  const signOut = async () => {
    Alert.alert(
      "Atenção!", 
      "Tem certeza que deseja sair da conta?",
      [
        {text: "Cancelar", style: "cancel"}
        ,
        { 
          text: "Sim", 
          onPress: async () => {
            setUser(null);
            await AsyncStorage.removeItem('@App:user');
            navigation.navigate('Login');
          } 
        },
      ], { cancelable: true } 
    );
    
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
